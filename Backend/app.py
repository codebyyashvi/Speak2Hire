from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import os
from pypdf import PdfReader
from murf import Murf
from dotenv import load_dotenv
import requests
import ffmpeg

load_dotenv()
app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

MURF_API_KEY = os.getenv("MURF_API_KEY")
if not MURF_API_KEY:
    raise ValueError("Please set MURF_API_KEY in .env")

client = Murf(api_key=MURF_API_KEY)

def extract_text_from_pdf(file_path):
    reader = PdfReader(file_path)
    text = ""
    for page in reader.pages:
        page_text = page.extract_text()
        if page_text:
            text += page_text + "\n"
    return text

def chunk_text(text, max_length=500):
    """
    Split text into chunks of max_length characters
    """
    chunks = []
    start = 0
    while start < len(text):
        end = min(start + max_length, len(text))
        chunks.append(text[start:end])
        start = end
    return chunks

def merge_mp3_files_ffmpeg(input_files, output_file):
    """
    Merge MP3 audio files using ffmpeg concat filter (safe for encoded MP3s).
    """
    # Load each audio file as input
    input_streams = [ffmpeg.input(f) for f in input_files]

    # Apply ffmpeg audio stream concat filter
    merged = ffmpeg.concat(*input_streams, v=0, a=1)

    # Output to the final mp3 file
    merged.output(output_file).run(overwrite_output=True)


def generate_voice_from_text(text: str) -> str:
    chunks = chunk_text(text, 500)
    chunk_paths = []

    for i, chunk in enumerate(chunks):
        print(f"[INFO] Generating chunk {i + 1}/{len(chunks)}")

        res = client.text_to_speech.generate(
            text=chunk,
            voice_id="en-US-terrell"
        )

        audio_url = res.audio_file
        response = requests.get(audio_url)

        if response.status_code != 200:
            raise ValueError(f"Failed to download audio chunk {i}. Status code: {response.status_code}")

        chunk_path = os.path.join(UPLOAD_FOLDER, f"chunk_{i}.mp3")
        with open(chunk_path, "wb") as f:
            f.write(response.content)

        chunk_paths.append(chunk_path)

    output_path = os.path.join(UPLOAD_FOLDER, "output.mp3")
    merge_mp3_files_ffmpeg(chunk_paths, output_path)

    # Optional cleanup of chunk files
    for path in chunk_paths:
        os.remove(path)

    return output_path

@app.route("/generate-voice", methods=["POST"])
def generate_voice():
    text = request.form.get("text")
    file = request.files.get("file")

    if text:
        audio_path = generate_voice_from_text(text)
    elif file:
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)
        text = extract_text_from_pdf(file_path)
        audio_path = generate_voice_from_text(text)
    else:
        return jsonify({"error": "No text or file provided"}), 400

    return send_file(audio_path, as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
