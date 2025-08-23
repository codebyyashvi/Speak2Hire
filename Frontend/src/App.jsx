import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './welcome'
import Upload from './upload'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  )
}

export default App
