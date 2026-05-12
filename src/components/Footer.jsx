function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">S</div>
              <span className="footer-logo-text">Stefan Prints RO</span>
            </div>
            <p>
              Bringing your ideas to life with professional 3D printing services. 
              Custom designs, premium quality, and exceptional craftsmanship.
            </p>
          </div>

          <div className="footer-column">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Services</h5>
            <ul className="footer-links">
              <li><a href="#custom">Custom Prints</a></li>
              <li><a href="#products">Product Printing</a></li>
              <li><a href="#contact">Consultation</a></li>
              <li><a href="#process">Prototyping</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Contact</h5>
            <ul className="footer-links">
              <li><a href="mailto:stefanprints@protonmail.com">Email</a></li>
              <li><a href="#">Romania</a></li>
              <li><a href="#">@StefanPrintsRO</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} <a href="#">Stefan Prints RO</a>. All rights reserved.
          </p>
          <p className="footer-made">
            Made with <span className="footer-made-icon">❤️</span> in Romania
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
