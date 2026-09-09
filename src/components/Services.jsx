import './Services.css'

const services = [
  {
    icon: '01',
    title: 'Web Development',
    text: 'Responsive websites and web applications built with modern frontend and backend technologies.',
  },
  {
    icon: '02',
    title: 'E-commerce Solutions',
    text: 'Product-focused online stores with clean layouts, shopping experiences and conversion-friendly interfaces.',
  },
  {
    icon: '03',
    title: 'Business Websites',
    text: 'Professional websites for businesses, churches, organisations and personal brands.',
  },
  {
    icon: '04',
    title: 'Web App Development',
    text: 'Interactive platforms with authentication, dashboards, APIs, Firebase and payment integrations.',
  },
]

function Services() {
  return (
    <section id="services" className="services">
      <p className="eyebrow">WHAT I DO</p>
      <h2 className="section-title">Services</h2>
      <p className="services-intro">I build practical, responsive digital experiences for businesses and individuals.</p>
      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-number">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
