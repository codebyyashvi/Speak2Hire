import { useRef, useState } from 'react'
import './App.css'

function Upload() {
  const [audio, setAudio] = useState(null)
  const [playbackRate, setPlaybackRate] = useState(1.0)
  const [file, setFile] = useState(null)
  const [text, setText] = useState('')
  const [voiceId, setVoiceId] = useState('en-US-terrell')
  const [loading, setLoading] = useState(false)
  const audioRef = useRef(null)

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!file && !text) {
      alert('Please provide a file or text to generate voice!')
      return
    }

    const formData = new FormData()
    if (file) formData.append('file', file)
    if (text) formData.append('text', text)
    formData.append('voice_id', voiceId)

    setLoading(true)
    try {
      const response = await fetch('https://backend-nvfg.onrender.com/generate-voice', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Voice generation failed.')
      }

      const blob = await response.blob()
      const audioUrl = URL.createObjectURL(blob)
      setAudio(audioUrl)
    } catch (error) {
      alert('Error: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4 overflow-hidden">
      {/* Twinkling Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              animationDuration: `${1 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col items-center w-full max-w-3xl gap-6 bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-5xl font-bold mb-4 text-center drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
          Generate Voice
        </h1>

        {/* File Upload */}
        <div className="w-full">
          <label className="block mb-2 font-medium">Upload File (.pdf, .doc, .docx)</label>
          <label className="cursor-pointer bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-gray-200 inline-block">
            Choose File
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          {file && (
            <p className="mt-2 text-sm text-gray-300">
              Selected file: <span className="font-medium">{file.name}</span>
            </p>
          )}
        </div>

        {/* Text Input */}
        <div className="w-full">
          <label className="block mb-2 font-medium">Or Enter Text</label>
          <textarea
            value={text}
            onChange={handleTextChange}
            rows={6}
            placeholder="Type your text here..."
            className="w-full p-2 rounded text-black"
          />
        </div>

        {/* Language / Voice Selection */}
        <div className="w-full">
          <label className="block mb-2 font-medium">Choose Voice / Language</label>
          <select
            value={voiceId}
            onChange={(e) => setVoiceId(e.target.value)}
            className="w-full p-2 rounded text-black"
          >
            <option value="en-US-ariana">English(US)(Female)</option>
            <option value="en-US-terrell">English(US)(Male)</option>
            <option value="hi-IN-shweta">Hindi(Female)</option>
            <option value="hi-IN-rahul">Hindi(Male)</option>
            <option value="fr-FR-louis">French(Female)</option>
            <option value="fr-FR-maxime">French(Male)</option>
            <option value="es-ES-elvira">Spanish(Female)</option>
            <option value="bn-IN-abhik">Bengali(Male)</option>
          </select>
        </div>

        {/* Generate Voice Button */}
        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-200'
          } text-black px-6 py-3 rounded-lg text-lg font-medium shadow-lg transition w-full`}
        >
          {loading ? 'Generating...' : 'Generate Voice'}
        </button>

        {/* Audio Player and Controls */}
        {audio && (
          <>
            <audio
              controls
              src={audio}
              ref={audioRef}
              style={{ width: '100%' }}
              onPlay={() => {
                if (audioRef.current) {
                  audioRef.current.playbackRate = playbackRate
                }
              }}
            />

            {/* Playback Speed and Download */}
            <div className="mt-4 flex flex-wrap justify-center items-center gap-4 w-full">
              <label className="text-white font-medium">Playback Speed:</label>
              <select
                value={playbackRate}
                onChange={(e) => {
                  const rateStr = e.target.value
                  setPlaybackRate(rateStr)
                  if (audioRef.current) {
                    audioRef.current.playbackRate = parseFloat(rateStr)
                  }
                }}
                className="text-black p-2 rounded"
              >
                <option value="0.75">0.75x</option>
                <option value="1.0">1x</option>
                <option value="1.25">1.25x</option>
                <option value="1.5">1.5x</option>
                <option value="2.0">2x</option>
              </select>
              <a
                href={audio}
                download="generated_voice.mp3"
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 font-medium"
              >
                Download
              </a>
            </div>
          </>
        )}
      </form>
    </div>
  )
}

export default Upload
