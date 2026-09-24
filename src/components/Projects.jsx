import "./Projects.css";

import movieImage from "../assets/projects/movie-streaming.png";
import ecommerceImage from "../assets/projects/ecommerce.png";
import churchImage from "../assets/projects/church.png";
import ayankeshImage from "../assets/projects/ayankesh.png";
import vendoraImage from "../assets/projects/vendora.PNG";
import vtuImage from "../assets/projects/vtu.PNG";
const projects = [
  {
    title: "Vendora Marketplace",
    description:
      "A modern full-stack marketplace where users can buy and sell products, with authentication, seller features, product management, and a secure marketplace experience.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: vendoraImage,
    category: "Full-Stack / Marketplace",
    link: "https://vendora-market.com.ng/",
  },
  {
    title: "Movie Streaming Platform",
    description:
      "A Netflix-inspired streaming experience with movie discovery, authentication, wishlist features, and streaming/download flows.",
    tech: ["React", "Firebase", "JavaScript"],
    image: movieImage,
    category: "Web App",
    link: "https://movie-stream-site-ruby.vercel.app/",
  },
  {
    title: "E-commerce Website",
    description:
      "A product-focused shopping website with categories, search, product cards, account access, and a responsive storefront layout.",
    tech: ["React", "JavaScript", "CSS"],
    image: ecommerceImage,
    category: "E-commerce",
    link: "https://phone-website-mocha.vercel.app/",
  },
  {
  title: "VTU & Digital Services Platform",
  description:
    "A digital services platform for airtime, data, and TV subscriptions, with wallet funding, authentication, and payment integration.",
  tech: ["React", "Node.js", "Firebase", "Paystack"],
  image: vtuImage,
  category: "Web App",
  link: "https://vtu-website-eight.vercel.app/",
},
  {
    title: "CCC Christ Tabernacle Website",
    description:
      "A responsive church website designed to present the church, services, information, events, and membership call-to-action clearly.",
    tech: ["React", "JavaScript", "CSS"],
    image: churchImage,
    category: "Business / Organisation",
    link: "https://celestialchurch-website.vercel.app/",
  },
  {
    title: "Ayankesh Product Website",
    description:
      "A clean product showcase for traditional instruments and products, with product cards and a simple buying journey.",
    tech: ["React", "JavaScript", "CSS"],
    image: ayankeshImage,
    category: "E-commerce",
    link: "https://ayankesh-website.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <p className="eyebrow">SELECTED WORK</p>

      <h2 className="section-title">Featured Projects</h2>

      <p className="projects-intro">
        Real projects that show my experience across full-stack applications,
        e-commerce, digital services, and organisation websites.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image-wrap">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="project-image"
              />

              <span className="project-category">
                {project.category}
              </span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;