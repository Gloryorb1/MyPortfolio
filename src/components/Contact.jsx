export default function Contact() {
  return (
    <section id="contact">
      <div className="container">

        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>
            If you’d like to work together or have any opportunities, feel free to reach out.
          </p>
        </div>

        <div className="contact-card glass">

          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:your@email.com">maynardaaron64@yahoo.com</a>
          </div>

          {/* <div className="contact-item">
            <span>GitHub</span>
            <a href="https://github.com/yourname" target="_blank" rel="noreferrer">
              github.com/yourname
            </a>
          </div> */}

          <div className="contact-item">
            <span>LinkedIn</span>
            <a href="https://www.linkedin.com/in/aaron-maynard-0889551b8/" target="_blank" rel="noreferrer">
              linkedin.com/in/aaron-maynard
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}