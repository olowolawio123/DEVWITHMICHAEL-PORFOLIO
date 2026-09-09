import './Skills.css'

function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Node.js", "Git", "Tailwind", "MongoDB"
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills