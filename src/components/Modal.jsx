import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Modal({ project, onClose }) 
{
  // 1. STATE (top of component)
  const [activeImage, setActiveImage] = useState(null);

  // 2. EFFECT (right under state)
  useEffect(() => {
    if (project?.images?.length) {
      setActiveImage(project.images[0]);
    } else {
      setActiveImage(null);
    }
  }, [project]);

  // 3. EARLY RETURN
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal glass"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {/* Title */}
        <h2 className="modal-title">{project.title}</h2>

        {/* MAIN IMAGE VIEWER */}
        {activeImage && (
          <div className="modal-main-image">
            <motion.img
              key={activeImage}
              src={activeImage}
              alt="Project preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
          </div>
        )}

        {/* THUMBNAILS */}
        {project.images?.length > 1 && (
          <div className="modal-thumbnails">
            {project.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className={`thumb ${activeImage === img ? "active" : ""}`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        )}

        

        <div className="modal-section">
          <h4>Overview</h4>
          <p>{project.description}</p>
        </div>

        <div className="modal-section">
          <h4>Details</h4>
          <p>{project.details}</p>
        </div>

        <div className="modal-section">
          <h4>Tech Stack</h4>
          {/* <p className="modal-tech">{project.tech}</p> */}
          {/* NEW: BADGES (optional) */}
          {project.badges && (
            <div className="skill-tags modal-badges">
              {project.badges.map((badge, i) => (
                <span key={i} className="badge">
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>

      </motion.div>
    </div>
  );
}