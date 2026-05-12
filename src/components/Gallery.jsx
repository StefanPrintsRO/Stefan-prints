import { useEffect, useRef } from 'react'

function Gallery() {
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

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate')
    elements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const galleryItems = [
    { title: 'Custom Phone Stand', category: 'Accessories', icon: '📱' },
    { title: 'Articulated Dragon', category: 'Collectibles', icon: '🐉' },
    { title: 'Desk Organizer', category: 'Office', icon: '🗄️' },
    { title: 'Cable Management', category: 'Tech', icon: '🔌' },
    { title: 'Kitchen Accessories', category: 'Home', icon: '🍳' },
    { title: 'Gaming Keycaps', category: 'Gaming', icon: '🎮' },
    { title: 'Custom Gifts', category: 'Personalized', icon: '🎁' },
    { title: 'Prototype Models', category: 'Engineering', icon: '⚙️' }
  ]

  return (
    <section className="gallery section" id="gallery" ref={sectionRef}>
      <div className="container">
        <div className="section-header scroll-animate">
          <span className="section-badge">// Gallery</span>
          <h2 className="section-title">
            Our <span className="section-title-highlight">Portfolio</span>
          </h2>
          <p className="section-description">
            A glimpse into the creative projects we've brought to life.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className={`gallery-item scroll-animate`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="gallery-item-placeholder">{item.icon}</div>
              <div className="gallery-item-overlay">
                <h4 className="gallery-item-title">{item.title}</h4>
                <span className="gallery-item-category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
