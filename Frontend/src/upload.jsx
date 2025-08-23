import { useState } from 'react'
import './App.css' // Make sure stars and shooting stars CSS is here

function Upload() {
  const [file, setFile] = useState(null)
  const [text, setText] = useState('')

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (file) {
      console.log('File submitted:', file)
    } else if (text) {
      console.log('Text submitted:', text)
    } else {
      alert('Please provide a file or text to generate voice!')
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
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full p-2 rounded text-white"
          />
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

        {/* Generate Voice Button */}
        <button
          type="submit"
          className="bg-white text-black px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:shadow-2xl hover:bg-gray-200 transition w-full"
        >
          Generate Voice
        </button>
      </form>
    </div>
  )
}

export default Upload
