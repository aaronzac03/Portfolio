import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ProjectModal({ isOpen, onRequestClose, project }) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Project Details" className="Modal" overlayClassName="Overlay">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {project.githubLink && (
        <p>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
      )}
      <button onClick={onRequestClose} className='close-button'>Close</button>
    </Modal>
  );
}

export default ProjectModal;
