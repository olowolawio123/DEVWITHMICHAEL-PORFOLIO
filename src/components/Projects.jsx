import './Projects.css'
import movieImage from '../assets/projects/movie-streaming.png'
import ecommerceImage from '../assets/projects/ecommerce.png'
import churchImage from '../assets/projects/church.png'
import ayankeshImage from '../assets/projects/ayankesh.png'

const projects = [
  {
    title: 'Movie Streaming Platform',
    description: 'A Netflix-inspired streaming experience with movie discovery, authentication, wishlist features and streaming/download flows.',
    tech: ['React', 'Firebase', 'JavaScript'],
    image: movieImage,
    category: 'Web App',
    link: 'https://movie-stream-site-ruby.vercel.app/',
  },
  {
    title: 'E-commerce Website',
    description: 'A product-focused shopping website with categories, search, product cards, account access and a responsive storefront layout.',
    tech: ['React', 'JavaScript', 'CSS'],
    image: ecommerceImage,
    category: 'E-commerce',
    link: 'https://phone-website-mocha.vercel.app/',
  },
  {
    title: 'VTU & Digital Services Platform',
    description: 'A digital services platform for airtime, data and TV subscriptions, with wallet funding, authentication and payment integration.',
    tech: ['React', 'Node.js', 'Firebase', 'Paystack'],
    category: 'Web App',
    link: 'https://vtu-website-eight.vercel.app/',
  },
  {
    title: 'CCC Christ Tabernacle Website',
    description: 'A responsive church website designed to present the church, services, information, events and membership call-to-action clearly.',
    tech: ['React', 'JavaScript', 'CSS'],
    image: churchImage,
    category: 'Business / Organisation',
    link: 'https://celestialchurch-website.vercel.app/',
  },
  {
    title: 'Ayankesh Product Website',
    description: 'A clean product showcase for traditional instruments and products, with product cards and a simple buying journey.',
    tech: ['React', 'JavaScript', 'CSS'],
    image: ayankeshImage,
    category: 'E-commerce',
    link: 'https://ayankesh-website.vercel.app/',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <p className="eyebrow">SELECTED WORK</p>
      <h2 className="section-title">Featured Projects</h2>
      <p className="projects-intro">Real projects that show my experience across web apps, e-commerce and organisation websites.</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image-wrap">
              {project.image ? (
                <img src={project.image} alt={`${project.title} preview`} className="project-image" />
              ) : (
                <div className="project-visual vtu-visual">
                  <span>VTU</span>
                  <strong>Digital Services</strong>
                  <small>Airtime • Data • TV • Wallet</small>
                </div>
              )}
              <span className="project-category">{project.category}</span>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <div className="project-actions">
                <a href={project.link} target={project.link.startsWith('http') ? '_blank' : undefined} rel={project.link.startsWith('http') ? 'noreferrer' : undefined}>
                  {project.link.startsWith('http') ? 'Live Demo ↗' : 'Discuss Project →'}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
