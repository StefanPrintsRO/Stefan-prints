import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import CustomPrints from './components/CustomPrints'
import Gallery from './components/Gallery'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth entrance animation
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <LoadingScreen />}
      <div className={`app ${loading ? '' : 'loaded'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <CustomPrints />
          <Gallery />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
