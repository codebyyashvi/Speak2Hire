# 🎙️ Speak2Hire – Voice Resume Generator

**Speak2Hire** is an AI-powered platform that lets users create professional voice resumes. Users can upload their resume or input text, generate high-quality voiceovers using **Murf AI TTS**, and preview or download the audio resume. The platform also supports multiple languages using different Murf voices that speak with native accents.

## 🚀 Features

* Upload PDF resumes or paste text manually
* Extract resume text automatically
* Adjustable playback speed
* Generate professional voiceover using Murf TTS API
* Preview audio directly in the browser
* Save audio resume for future use
* Multiple languages native accents

## 🛠️ Tech Stack

| Layer      | Technology                                  |
| ---------- | ------------------------------------------- |
| Frontend   | React, Tailwind CSS                         |
| Backend    | Flask, Python                               |
| Voice API  | Murf AI (TTS, Voice Library)                |
| Deployment | Render                                      |

## ⚡ Setup Instructions

### 1. Clone the repository

```bash
git clone <repo-url>
cd speak2hire
```

### 2. Setup Backend (Flask)

```bash
cd Backend
pip install -r requirements.txt
```

* Create a `.env` file and add your Murf API key:

```
MURF_API_KEY=your_murf_api_key_here
```
### 📦 Install FFmpeg (Required for merging audio chunks)

#### ✅ Windows

1. Download from: https://www.gyan.dev/ffmpeg/builds/
2. Extract the zip and copy the path to the `bin` folder.
3. Add it to **System Environment Variables → Path**

#### ✅ Ubuntu / Debian

```bash
sudo apt update
sudo apt install ffmpeg
```

#### ✅ macOS (with Homebrew)

```bash
brew install ffmpeg
```

---

### ▶️ Run Flask Server

```bash
python app.py
```

### 3. Setup Frontend (React + Tailwind)

```bash
cd Frontend
npm i
npm run dev
```

* The frontend will run on `http://localhost:3000`
* The backend should be running on `http://localhost:5000`

## ✅ Requirements (Backend)

```txt
Flask==3.1.0
flask_cors==5.0.1
pypdf==5.5.0
requests==2.32.3
python_dotenv==1.0.1
murf==2.0.2
ffmpeg-python==0.2.0
```

---

## 🤖 Credits

- 🗣️ [Murf.AI](https://murf.ai) — TTS API for generating high-quality voice
- 🌍 Supports multiple language **accents** via Murf’s diverse voice library
- ⭐ TailwindCSS + React for frontend UI/UX
- 🔥 Flask for backend API handling
- 🧪 FFmpeg for audio chunk merging and processing

---

## 📌 License

This project is for educational/hackathon purposes only. Not for commercial use without Murf license.

---

> Made with ❤️ by Yashvi Khatri
