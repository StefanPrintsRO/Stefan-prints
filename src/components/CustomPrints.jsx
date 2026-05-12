import { useState, useEffect, useRef } from 'react'

function CustomPrints() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    color: '',
    notes: ''
  })
  const [status, setStatus] = useState('idle')

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          description: formData.description,
          color: formData.color,
          notes: formData.notes
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', description: '', color: '', notes: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const features = [
    { icon: '👤', text: 'Names & Text' },
    { icon: '🎮', text: 'Gamer Tags' },
    { icon: '🏷️', text: 'Logos & Branding' },
    { icon: '🔣', text: 'Symbols & Icons' },
    { icon: '💝', text: 'Personal Messages' },
    { icon: '🎭', text: 'Custom Characters' }
  ]

  return (
    <section className="custom-prints section" id="custom" ref={sectionRef}>
      <div className="container">
        <div className="section-header scroll-animate">
          <span className="section-badge">// Custom Prints</span>
          <h2 className="section-title">
            Make It <span className="section-title-highlight">Uniquely Yours</span>
          </h2>
          <p className="section-description">
            Want something special? Send us your custom 6x6 cm print request and we'll bring your vision to life.
          </p>
        </div>

        <div className="custom-prints-content">
          <div className="custom-prints-info scroll-animate-left">
            <h3>What Can You Request?</h3>
            <p>
              Our custom printing service allows you to personalize items with names, gamer tags, 
              logos, symbols, or any creative design you have in mind. Perfect for gifts, 
              personal branding, or unique personalizations.
            </p>

            <div className="custom-prints-features">
              {features.map((feature, index) => (
                <div key={index} className="custom-prints-feature">
                  <span className="custom-prints-feature-icon">{feature.icon}</span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="custom-prints-specs">
              <div className="custom-prints-spec">
                <div className="custom-prints-spec-value">6x6</div>
                <div className="custom-prints-spec-label">Max Size (cm)</div>
              </div>
              <div className="custom-prints-spec">
                <div className="custom-prints-spec-value">7+</div>
                <div className="custom-prints-spec-label">Color Options</div>
              </div>
              <div className="custom-prints-spec">
                <div className="custom-prints-spec-value">24-48h</div>
                <div className="custom-prints-spec-label">Delivery</div>
              </div>
            </div>
          </div>

          <div className="custom-prints-form-container scroll-animate-right">
            {status === 'success' ? (
              <div className="custom-prints-form" style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                <h4 style={{ marginBottom: '1rem' }}>Request Sent!</h4>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Thank you for your custom print request! We'll get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus('idle')} 
                  style={{
                    marginTop: '1.5rem',
                    padding: '0.75rem 1.5rem',
                    background: 'var(--color-bg-tertiary)',
                    color: 'var(--color-text-primary)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '0.5rem',
                    cursor: 'pointer'
                  }}
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form className="custom-prints-form" onSubmit={handleSubmit}>
                <h4>Request Your Custom Print</h4>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Request Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your custom print request in detail..."
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="color">Preferred Color</label>
                    <select
                      id="color"
                      name="color"
                      value={formData.color}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select color</option>
                      <option value="white">White</option>
                      <option value="black">Black</option>
                      <option value="orange">Orange</option>
                      <option value="blue">Blue</option>
                      <option value="red">Red</option>
                      <option value="green">Green</option>
                      <option value="purple">Purple</option>
                      <option value="gray">Gray</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Additional Notes (Optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any additional requirements or questions..."
                  />
                </div>

                <button type="submit" className="form-submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Submit Request'}
                </button>

                {status === 'error' && (
                  <p style={{ color: '#ff6b6b', textAlign: 'center', marginTop: '1rem', fontSize: '0.875rem' }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomPrints
