export default function Skills() {
  const skills = {
    "Languages": ["Java", "JavaScript", "C++", "C#", "PHP"],
    "Frontend": ["HTML", "CSS", "jQuery", "Ajax", "React"],
    "Backend": ["MVC Architecture", "API Integration"],
    "Databases": ["MySQL", "SQL Server", "Firebase NoSQL"],
    "Testing": ["Unit Testing", "Integration Testing", "Regression Testing", "Black-box / White-box"],
    "Tools": ["Git", "Visual Studio", "Android Studio", "MS Office"]
  };

  return (
    <section id="skills">
      <div className="container">

        <div className="section-header">
          <h2>Skills</h2>
          <p>Technologies and engineering practices I work with.</p>
        </div>

        <div className="skills-grid">

          {Object.entries(skills).map(([category, items], index) => (
            <div key={index} className="skill-card glass">
              <h4>{category}</h4>
              <div className="skill-tags">
                {items.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}