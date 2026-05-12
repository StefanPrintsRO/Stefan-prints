function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-bg-gradient"></div>
        <div className="hero-bg-grid"></div>
        <div className="hero-particles">
          <div className="hero-particle"></div>
          <div className="hero-particle"></div>
          <div className="hero-particle"></div>
          <div className="hero-particle"></div>
          <div className="hero-particle"></div>
          <div className="hero-particle"></div>
        </div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Professional 3D Printing Services
          </div>
          
          <h1 className="hero-title">
            Bringing Your <br />
            <span className="hero-title-highlight">Ideas to Life</span>
          </h1>
          
          <p className="hero-description">
            Transform your concepts into tangible products with cutting-edge 3D printing technology. 
            From custom designs to personalized creations, we make the impossible possible.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="hero-btn hero-btn-primary">
              <span>View Products</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#custom" className="hero-btn hero-btn-secondary">
              <span>Request Custom Print</span>
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">500+</div>
              <div className="hero-stat-label">Prints Completed</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">50+</div>
              <div className="hero-stat-label">Happy Clients</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">100%</div>
              <div className="hero-stat-label">Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-3d-model">
            <div className="hero-3d-model-inner">
              <div className="hero-model-icon">🏭</div>
              <span className="hero-model-label">3D Printing Lab</span>
            </div>
          </div>
          
          <div className="hero-floating-badge top-right">
            <div className="hero-floating-badge-icon">⚡</div>
            <div>
              <div className="hero-floating-badge-text">High Quality</div>
              <div className="hero-floating-badge-sub">Premium Materials</div>
            </div>
          </div>
          
          <div className="hero-floating-badge bottom-left">
            <div className="hero-floating-badge-icon">🎯</div>
            <div>
              <div className="hero-floating-badge-text">Precision</div>
              <div className="hero-floating-badge-sub">0.1mm Layer Resolution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
