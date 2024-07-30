import React from 'react';
import projects from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-100 p-4 rounded">
              <img src={`https://monitoring.pptik.id/data/project/${project.image}`} alt={project.title} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
