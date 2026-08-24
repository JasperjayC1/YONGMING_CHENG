import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-3xl font-serif font-bold text-neutral-900">科研项目</h2>
        <div className="flex-1 h-px bg-neutral-200"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">{project.date}</span>
              <span className="text-xs font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-600 rounded-full">{project.role}</span>
            </div>
            
            <h3 className="text-lg font-bold text-neutral-900 mb-4 leading-snug">{project.title}</h3>
            
            <ul className="space-y-2">
              {project.desc.map((item, i) => (
                <li key={i} className="text-neutral-600 text-sm leading-relaxed flex items-start">
                  <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
