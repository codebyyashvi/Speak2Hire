import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

function Welcome() {
  const navigate = useNavigate()
  const handleButtonClick = () => {
    navigate('/upload'); // Navigates to the /about route
  };

  return (
    // <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
    //   {/* Twinkling Stars */}
    //   <div className="absolute inset-0">
    //     {[...Array(100)].map((_, i) => (
    //       <div
    //         key={i}
    //         className="star"
    //         style={{
    //           top: `${Math.random() * 100}%`,
    //           left: `${Math.random() * 100}%`,
    //           width: `${1 + Math.random() * 2}px`,
    //           height: `${1 + Math.random() * 2}px`,
    //           animationDuration: `${1 + Math.random() * 3}s`,
    //         }}
    //       />
    //     ))}
    //   </div>

    //   {/* Continuous Shooting Stars */}
    //   <div className="absolute inset-0">
    //     {[...Array(20)].map((_, i) => (
    //       <div
    //         key={i}
    //         className="shooting-star"
    //         style={{
    //           top: `${Math.random() * 100}%`,
    //           left: `${Math.random() * 100}%`,
    //           animationDelay: `${Math.random() * 5}s`,
    //           animationDuration: `${1 + Math.random() * 1}s`,
    //         }}
    //       />
    //     ))}
    //   </div>

    //   {/* Content */}
    //   <h1 className="text-6xl font-bold mb-8 text-center text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
    //     Welcome to Speak2Hire
    //   </h1>
    //   <p className="text-lg mb-12 text-center text-gray-300">
    //     Upload your resume PDFs and get the voice of your resume instantly.
    //   </p>
    //   <Link
    //     to="/upload"
    //     className="bg-white text-black px-8 py-3 rounded-lg text-lg font-medium shadow-lg hover:shadow-2xl hover:bg-gray-200 transition"
    //   >
    //     Get Hired!
    //   </Link>
    // </div>
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
  
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

        {/* Shooting Stars */}
        <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
            <div
                key={i}
                className="shooting-star"
                style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${1 + Math.random() * 1}s`,
                }}
            />
            ))}
        </div>

        {/* Content */}
        <h1 className="text-6xl font-bold mb-8 text-center drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
            Welcome to Speak2Hire
        </h1>
        <p className="text-lg mb-12 text-center">
            Upload your resume PDFs and texts as input and get the voice of your resume instantly.
        </p>
        <button
            onClick={() => navigate('/upload')}
            className="bg-white text-black px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-200 transition"
        >
            Hear it!
        </button>
        </div>

  )
}

export default Welcome
