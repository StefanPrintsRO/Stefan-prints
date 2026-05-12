import { useState, useEffect } from 'react'

function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    // Hide loading screen after animation
    setTimeout(() => {
      setVisible(false)
    }, 1800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`loading-screen ${!visible ? 'hidden' : ''}`}>
      <div className="loading-logo">
        <div className="loading-logo-icon">
          <div className="cube">
            <div className="cube-face front">S</div>
            <div className="cube-face back">P</div>
            <div className="cube-face right">R</div>
            <div className="cube-face left">O</div>
            <div className="cube-face top">3D</div>
            <div className="cube-face bottom">RO</div>
          </div>
        </div>
        <span className="loading-logo-text">Stefan Prints RO</span>
      </div>
      
      <div className="loading-bar-container">
        <div className="loading-bar" style={{ width: `${progress}%` }}></div>
      </div>
      
      <span className="loading-text">Loading your experience...</span>
    </div>
  )
}

export default LoadingScreen
