import { useEffect, useRef } from 'react'

function Contact() {
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
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate-left, .scroll-animate-right')
    elements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header scroll-animate">
          <span className="section-badge">// Contact</span>
          <h2 className="section-title">
            Let's <span className="section-title-highlight">Connect</span>
          </h2>
          <p className="section-description">
            Have questions or ready to start your project? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info scroll-animate-left">
            <h3>Get In Touch</h3>
            <p>
              Whether you have a question about our services, pricing, or just want to say hello, 
              we're here to help. Reach out and let's create something amazing together.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon">📧</div>
                <div className="contact-method-info">
                  <h4>Email Us</h4>
                  <a href="mailto:stefanprints@protonmail.com">stefanprints@protonmail.com</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">💬</div>
                <div className="contact-method-info">
                  <h4>Social Media</h4>
                  <a href="#">@StefanPrintsRO</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">🌍</div>
                <div className="contact-method-info">
                  <h4>Location</h4>
                  <a href="#">Romania</a>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a href="#" className="contact-social-link" title="GitHub">
                <span>🐙</span>
              </a>
              <a href="#" className="contact-social-link" title="Instagram">
                <span>📸</span>
              </a>
              <a href="#" className="contact-social-link" title="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="contact-social-link" title="YouTube">
                <span>▶️</span>
              </a>
            </div>
          </div>

          <div className="contact-cta scroll-animate-right">
            <h4>Ready to Start Your Project?</h4>
            <p>
              Fill out our custom print request form and we'll get back to you within 24 hours.
            </p>
            <a href="#custom" className="contact-cta-btn">
              <span>Request Custom Print</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
