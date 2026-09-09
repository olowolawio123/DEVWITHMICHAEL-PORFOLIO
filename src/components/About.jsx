import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm <strong>Michael Olowolawi</strong>, a Full Stack Developer passionate about building clean, modern, responsive, and user-friendly web applications.
          </p>
          <p>
            I work with technologies such as React, JavaScript, Node.js, Express, Firebase, MongoDB, Tailwind CSS, and Git. I enjoy turning ideas into practical digital products and continuously improving my development skills.
          </p>
          <p>
            I studied Software Development at Classic System Infotech and graduated in 2023. I'm open to freelance projects, collaborations, internships, and full-time development opportunities.
          </p>
        </div>

        <div className="about-details">
          <div><strong>Name:</strong> Michael Olowolawi</div>
          <div><strong>Role:</strong> Full Stack Developer</div>
          <div><strong>Email:</strong> <a href="mailto:olowolawio@gmail.com">olowolawio@gmail.com</a></div>
          <div><strong>Phone:</strong> <a href="tel:+2348132893350">+234 813 289 3350</a></div>
        </div>
      </div>
    </section>
  )
}

export default About
