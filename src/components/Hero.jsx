import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <p className="hero-greeting">Hello, I'm</p>
      <h1><span>Michael Olowolawi</span></h1>
      <h2>Full Stack Developer</h2>
      <p>
        I build modern, responsive, and user-friendly web applications using React, Node.js, Firebase, and other modern technologies.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn primary">View My Work</a>
        <a href="mailto:olowolawio@gmail.com" className="btn secondary">Hire Me</a>
      </div>
    </section>
  )
}

export default Hero
