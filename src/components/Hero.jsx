import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>
            Building clean, scalable <span className="highlight">web applications</span>
          </h1>

          <p>
            Software Developer focused on creating efficient, user-friendly systems 
            with modern technologies and strong attention to detail.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">View My Work</a>
            <a href="#contact" className="secondary-btn">Contact Me</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}