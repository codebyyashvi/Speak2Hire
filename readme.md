# 🎙️ Speak2Hire – Voice Resume Generator

**Speak2Hire** is an AI-powered platform that lets users create professional voice resumes. Users can upload their resume or input text, generate high-quality voiceovers using **Murf AI TTS**, and preview or download the audio resume. The platform also supports dubbing and real-time streaming features for an immersive experience.

## 🚀 Features

* Upload PDF resumes or paste text manually
* Extract resume text automatically
* Generate professional voiceover using Murf TTS API
* Preview audio directly in the browser
* Save audio resume for future use
* Optional dubbing and real-time streaming (planned)

## 🛠️ Tech Stack

| Layer      | Technology                                  |
| ---------- | ------------------------------------------- |
| Frontend   | React, Tailwind CSS                         |
| Backend    | Flask, Python                               |
| Database   | MongoDB (optional)                          |
| Voice API  | Murf AI (TTS, Dubbing, WebSocket)           |
| Deployment | Vercel (Frontend), Render/Railway (Backend) |

## ⚡ Setup Instructions

### 1. Clone the repository

```bash
git clone <repo-url>
cd speak2hire
```

### 2. Setup Backend (Flask)

```bash
cd server
python -m venv venv
source venv/bin/activate     # On Windows: venv\Scripts\activate
pip install -r requirements.txt   # Or install Flask, flask-cors, requests, pdfminer.six
```

* Create a `.env` file and add your Murf API key:

```
MURF_API_KEY=your_murf_api_key_here
```

* Run Flask server:

```bash
python app.py
```

### 3. Setup Frontend (React + Tailwind)

```bash
cd ../client
npm install
npm start
```

* The frontend will run on `http://localhost:3000`
* The backend should be running on `http://localhost:5000`

## 🗂 Usage

1. Upload your PDF resume or paste your text
2. Click **Extract Text**
3. Paste or edit the extracted text if needed
4. Click **Generate Voice** to get audio preview
5. Play the audio directly in the browser

## 🔗 Murf API Integration

* **TTS**: Converts resume text to professional voice
* **Dubbing**: Converts user-recorded audio into Murf voice (planned)
* **WebSocket Streaming**: Real-time preview of generated voice (planned)

## 💡 Future Enhancements

* Support multiple languages and accents
* Resume sharing via link or email
* Animated video generation with voiceover
* Real-time microphone dubbing
* Resume analytics and scoring

## 📜 License

This project is open-source and free to use for educational and hackathon purposes.

Made with ❤️ using **React**, **Flask**, and **Murf AI**
