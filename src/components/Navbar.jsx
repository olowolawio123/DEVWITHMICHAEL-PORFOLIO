import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <h2 className="logo">
  <span className="logo-bracket">&lt;</span>
  Michael
  <span className="logo-bracket">/&gt;</span>
</h2>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
      </div>

      {/* Navigation Links */}
      <div className={isOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar