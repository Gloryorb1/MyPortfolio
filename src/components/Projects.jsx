import { motion } from "framer-motion";

export default function Projects({ projects, setSelectedProject }) {
  return (
    <section id="projects">
      <div className="container">

        <div className="section-header">
          <h2>Selected Work</h2>
          <p>A collection of projects showcasing my experience and approach.</p>
        </div>

        <div className="grid">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              className="card glass project-card"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => setSelectedProject(p)}
            >

              {/* IMAGE */}
              {p.images?.length > 0 && (
                <div className="project-image">
                  <img src={p.images[0]} alt={p.title} />
                </div>
              )}

              <div className="project-content">

                <h4>{p.title}</h4>
                <p className="project-desc">{p.description}</p>

                {/* BADGES */}
                {p.badges && (
                  <div className="skill-tags">
                    {p.badges.map((badge, i) => (
                      <span key={i} className="badge">
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-meta">
                  {/* <span className="project-tech">{p.tech}</span> */}
                  <span className="project-link">View details →</span>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}