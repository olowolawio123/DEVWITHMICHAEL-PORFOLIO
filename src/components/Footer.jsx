import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2><span>&lt;</span> Michael <span>/&gt;</span></h2>
          <p>Full Stack Developer building modern, responsive and practical web experiences.</p>
          <a className="footer-cta" href="mailto:olowolawio@gmail.com?subject=Project%20Enquiry">Let's work together →</a>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <a href="#services">Web Development</a>
          <a href="#services">E-commerce</a>
          <a href="#services">Business Websites</a>
          <a href="#services">Web Applications</a>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact</h3>
          <a href="mailto:olowolawio@gmail.com">olowolawio@gmail.com</a>
          <a href="tel:+2348132893350">+234 813 289 3350</a>
          <span>Available for freelance projects</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Michael Olowolawi. All rights reserved.</p>
        <p>Designed & built with React.</p>
      </div>
    </footer>
  )
}

export default Footer
