import { useEffect, useRef } from 'react'

function Products() {
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

  const products = [
    {
      title: 'Desk Organizer',
      description: 'Keep your workspace tidy with this modular organizer featuring phone stand, pen holder, and cable management.',
      price: '30',
      badge: 'Best Seller',
      icon: '🗄️'
    },
    {
      title: 'Articulated Dragon',
      description: 'A beautifully designed articulated dragon with 20+ joints. Perfect as a collectible or fidget toy.',
      price: '25',
      badge: 'Popular',
      icon: '🐉'
    },
    {
      title: 'Phone Stand',
      description: 'Ergonomic phone stand with adjustable angles. Features cable routing and non-slip base.',
      price: '10',
      icon: '📱'
    },
    {
      title: 'Kitchen Sponge Holder',
      description: 'Keep your sponge dry and organized. Water drainage design prevents bacteria growth.',
      price: '15',
      icon: '🧽'
    }
  ]

  const handleRequest = (product) => {
    const subject = encodeURIComponent(`Request: ${product.title}`)
    const body = encodeURIComponent(`Hi! I'm interested in the ${product.title} (${product.price} RON).\n\nPlease let me know if it's available.\n\nThank you!`)
    window.open(`mailto:stefanprints@protonmail.com?subject=${subject}&body=${body}`, '_blank')
  }

  return (
    <section className="products section" id="products" ref={sectionRef}>
      <div className="container">
        <div className="section-header scroll-animate">
          <span className="section-badge">// Products</span>
          <h2 className="section-title">
            Our <span className="section-title-highlight">Creations</span>
          </h2>
          <p className="section-description">
            Premium PLA plastic prints. Cash only, +tax. Meeting required for shipping (coming soon).
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-card scroll-animate"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="product-card-image">
                <span className="product-card-image-placeholder">{product.icon}</span>
                {product.badge && (
                  <span className="product-card-badge">{product.badge}</span>
                )}
              </div>
              <div className="product-card-content">
                <h3 className="product-card-title">{product.title}</h3>
                <p className="product-card-description">{product.description}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                  Premium PLA plastic • Not all colors - if out of stock will be contacted
                </p>
                <div className="product-card-footer">
                  <div className="product-card-price">
                    {product.price} <span>RON</span>
                  </div>
                  <button className="product-card-btn" onClick={() => handleRequest(product)}>
                    Request
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'var(--color-bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(255, 107, 53, 0.2)'
        }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
            💳 Cash only • +tax included<br/>
            📍 Meeting required for pickup<br/>
            🚚 Shipping coming soon
          </p>
        </div>
      </div>
    </section>
  )
}

export default Products
