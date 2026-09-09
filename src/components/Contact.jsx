import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-text">
        Have a project, job opportunity, or idea you'd like to discuss? I'd love to hear from you.
      </p>

      <div className="contact-info">
        <a href="mailto:olowolawio@gmail.com">olowolawio@gmail.com</a>
        <a href="tel:+2348132893350">+234 813 289 3350</a>
      </div>

      <a href="mailto:olowolawio@gmail.com" className="contact-btn">Send Me an Email</a>
    </section>
  )
}

export default Contact
