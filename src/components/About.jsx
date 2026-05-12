import { useEffect, useRef } from 'react'

function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right')
    elements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header scroll-animate">
          <span className="section-badge">// About Us</span>
          <h2 className="section-title">
            Turning Problems Into <span className="section-title-highlight">Solutions</span>
          </h2>
          <p className="section-description">
            We don't just print things – we solve real problems with innovative 3D printing solutions.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text scroll-animate-left">
            <h3>Your Creative Partner for 3D Printing</h3>
            <p>
              At Stefan Prints RO, we believe that every great product starts with a problem worth solving. 
              Our mission is to take your ideas from concept to reality using state-of-the-art 3D printing technology.
            </p>
            <p>
              Whether you need custom desk accessories, unique gifts, functional prototypes, or personalized items, 
              we bring precision, quality, and creativity to every print.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">🎨</div>
                <h4>Custom Designs</h4>
                <p>Personalized prints tailored to your vision</p>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">🖥️</div>
                <h4>Desk Gadgets</h4>
                <p>Unique accessories for your workspace</p>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">📱</div>
                <h4>Phone Stands</h4>
                <p>Functional and stylish holders</p>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">🤖</div>
                <h4>Articulated Models</h4>
                <p>Intricate moving parts and figures</p>
              </div>
            </div>
          </div>

          <div className="about-visual scroll-animate-right">
            <div className="about-image-container">
              <div className="about-image-inner">
                <div className="about-image-placeholder">
                  <span className="about-image-placeholder-icon">🔧</span>
                </div>
                <div className="about-stats">
                  <div className="about-stat">
                    <div className="about-stat-value">0.1mm</div>
                    <div className="about-stat-label">Resolution</div>
                  </div>
                  <div className="about-stat">
                    <div className="about-stat-value">24h</div>
                    <div className="about-stat-label">Avg. Turnaround</div>
                  </div>
                  <div className="about-stat">
                    <div className="about-stat-value">PLA+</div>
                    <div className="about-stat-label">Premium Material</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
