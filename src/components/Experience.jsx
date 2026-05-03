export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer (Contract)",
      company: "Crugen Media Limited",
      period: "July 2025 — April 2026",
      points: [
        "Designed and developed scalable web and software applications (front-end and back-end) aligned with client requirements",
        "Led system architecture discussions and contributed to database design, API integrations, and legacy system interoperability",
        "Implemented UI enhancements focused on performance, security, and user experience",
        "Developed automated and manual testing strategies (unit, integration, regression) to ensure system reliability",
        "Collaborated with cross-functional teams to translate requirements into robust technical solutions"
      ]
    },
    {
      role: "Junior Software Engineer (Contract)",
      company: "Crugen Media Limited",
      period: "June 2022 — June 2025",
      points: [
        "Developed and maintained front-end and back-end features for business applications and websites",
        "Assisted in planning, designing, and implementing software systems and enhancements",
        "Wrote unit and integration tests and participated in code reviews",
        "Integrated APIs and supported system upgrades and user training",
        "Maintained version control and technical documentation across deliverables",
        "Researched and proposed improvements for performance and scalability"
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Crugen Media Limited",
      period: "Dec 2021 — May 2022",
      points: [
        "Developed front-end and back-end features for business websites and applications",
        "Assisted in system design and implementation of UI components",
        "Worked with stakeholders to translate business requirements into technical solutions",
        "Maintained version control and supported deployments and updates"
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="container">

        <div className="section-header">
          <h2>Experience</h2>
          <p>My professional experience building and maintaining real-world systems.</p>
        </div>

        {experiences.map((exp, index) => (
          <div key={index} className="card glass experience-card">

            <div className="experience-header">
              <h3>{exp.role}</h3>
              <span className="experience-date">{exp.period}</span>
            </div>

            <p className="experience-company">{exp.company}</p>

            <ul className="experience-list">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

          </div>
        ))}

      </div>
    </section>
  );
}