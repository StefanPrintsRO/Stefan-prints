import { useEffect, useRef } from 'react'

function Process() {
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

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate')
    elements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: '01',
      title: 'Problem',
      description: 'We discuss your needs and understand the challenge you want to solve.',
      icon: '💡'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our team creates or optimizes the 3D model for printing.',
      icon: '✏️'
    },
    {
      number: '03',
      title: 'Print',
      description: 'Using premium PLA+ material and precision settings.',
      icon: '🖨️'
    },
    {
      number: '04',
      title: 'Test',
      description: 'Quality assurance to ensure every detail meets our standards.',
      icon: '✅'
    },
    {
      number: '05',
      title: 'Deliver',
      description: 'Carefully packaged and shipped to your doorstep.',
      icon: '📦'
    }
  ]

  return (
    <section className="process section" id="process" ref={sectionRef}>
      <div className="container">
        <div className="section-header scroll-animate">
          <span className="section-badge">// Our Process</span>
          <h2 className="section-title">
            From Idea to <span className="section-title-highlight">Reality</span>
          </h2>
          <p className="section-description">
            A streamlined process designed to deliver exceptional results every time.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="process-step scroll-animate"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="process-step-number">
                <span className="process-step-icon">{step.icon}</span>
              </div>
              <div className="process-step-content">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
