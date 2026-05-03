export default function Navbar() {
  return (
    <header className="navbar glass">
      
      {/* Logo / Name */}
      <div className="nav-left">
        <h1 className="logo">Aaron Maynard</h1>
      </div>

      {/* Links */}
      <nav className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* CTA */}
      <div className="nav-right">
        <a href="./Aaron_Maynard_Resume_20260425_1.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>

    </header>
  );
}