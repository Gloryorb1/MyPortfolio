import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import { projects } from "./data/projects";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Navbar />
      <Hero />

      <Projects
        projects={projects}
        setSelectedProject={setSelectedProject}
      />

      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

export default App;