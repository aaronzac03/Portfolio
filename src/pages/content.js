import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
import ProjectCarousel from "../components/carousel";
import ProjectModal from "../components/projectmodal";

const projectData = [
  {
    title: "Medical Clinic Website",
    description: "This is a website created for a mock 'medical clinic' using PHP. The website provides users with all the necessary information about the clinic such as staff and the history of the clinic.",
    images: [
      "/screenshots/clinicwebsite.png",
      "/screenshots/clinicwebsite2.png",
      "/screenshots/clinicwebsite3.png"
    ],
    githubLink: "https://github.com/aaronzac03/Clinic-Website-Project.git"
  },
  {
    title: "Stock Inventory Application",
    description: "This is a shoe inventory application created using Python. The application allows its users to add new shoes, remove current shoes, update the information for the current stock, and view the entire inventory.",
    images: [
      "/screenshots/pythonproject.png",
      "/screenshots/pythonproject2.png"
    ],
    githubLink: "https://github.com/aaronzac03/Jordan-collection-project.git"
  }
];

function Content() {
  const fadeInBlurb = useSpring({ opacity: 1, from: { opacity: -10 }, delay: 500 });
  const fadeInProjectsTitle = useSpring({ opacity: 1, from: { opacity: -10 }, delay: 1000 });
  const fadeInRow1 = useSpring({ opacity: 1, from: { opacity: -10 }, delay: 1500 });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="container">
      <animated.div style={fadeInBlurb} className="blurb">
        <h3>Hey, I'm Aaron</h3>
        <p>
          I am a 3rd year student at RMIT University completing my Bachelor's degree in Information Technology. 
          I've got a strong passion for technology and I am always eager to learn new skills and really apply 
          myself in new ways.
        </p>
        <br />
        <p>
          This is a portfolio website that I have created using ReactJS. You can also view the projects I have created 
          through <a href="https://github.com/aaronzac03" target="_blank" rel="noreferrer">my GitHub</a>.
        </p>
      </animated.div>

      <animated.div style={fadeInProjectsTitle} className="project">
        <h3>Projects</h3>
        <p>Click on the project title to see more information.</p>
      </animated.div>

      <animated.div style={fadeInRow1} className="row1">
        {projectData.map((project, index) => (
          <div className="project-item" key={index}>
            <ProjectCarousel images={project.images} />
            <motion.h3
              className="project-title"
              whileHover={{ scale: 1.1 }}
              onClick={() => openModal(project)}
            >
              {project.title}
            </motion.h3>
          </div>
        ))}
      </animated.div>

      <ProjectModal isOpen={modalIsOpen} onRequestClose={closeModal} project={selectedProject} />
    </div>
  );
}

export default Content;
