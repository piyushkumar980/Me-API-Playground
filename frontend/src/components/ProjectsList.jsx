import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../api';

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
      setLoading(false);
    };
    getProjects();
  }, []);

  if (loading) return <p className="loading-text">Loading projects...</p>;

  return (
    <div className="projects-list-container">
      <h2 className="section-title" style={{ textAlign: 'center' }}>All Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="section project-item">
          <h3 className="item-header">
            <h4>{project.title}</h4>
            <div className="project-links">
              {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
              {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
          </h3>
          <p className="item-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectsList; 