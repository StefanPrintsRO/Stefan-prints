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
      title: 'Custom Desk Organizer',
      description: 'Keep your workspace tidy with this modular organizer featuring phone stand, pen holder, and cable management.',
      price: '45',
      badge: 'Best Seller',
      icon: '🗄️'
    },
    {
      title: 'Articulated Dragon Model',
      description: 'A beautifully designed articulated dragon with 20+ joints. Perfect as a collectible or fidget toy.',
      price: '35',
      badge: 'Popular',
      icon: '🐉'
    },
    {
      title: 'Premium Phone Stand',
      description: 'Ergonomic phone stand with adjustable angles. Features cable routing and non-slip base.',
      price: '25',
      badge: 'New',
      icon: '📱'
    },
    {
      title: 'Kitchen Sponge Holder',
      description: 'Keep your sponge dry and organized. Water drainage design prevents bacteria growth.',
      price: '15',
      icon: '🧽'
    },
    {
      title: 'Mechanical Keyboard Wrist Rest',
      description: 'Ergonomic memory foam wrist rest with 3D printed ventilated shell for ultimate comfort.',
      price: '30',
      badge: 'Premium',
      icon: '⌨️'
    },
    {
      title: 'Cable Management Clips',
      description: 'Set of 10 magnetic cable clips to keep your desk clean and cables organized.',
      price: '12',
      icon: '🔌'
    }
  ]

  return (
    <section className="products section" id="products" ref={sectionRef}>
      <div className="container">
        <div className="section-header scroll-animate">
          <span className="section-badge">// Products</span>
          <h2 className="section-title">
            Our <span className="section-title-highlight">Creations</span>
          </h2>
          <p className="section-description">
            Explore our collection of carefully designed and printed products.
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
                <div className="product-card-footer">
                  <div className="product-card-price">
                    {product.price} <span>RON</span>
                  </div>
                  <button className="product-card-btn">Request Print</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
