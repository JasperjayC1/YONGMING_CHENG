import React from "react";
import { experience } from "../data";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-3xl font-serif font-bold text-neutral-900">实践与经历</h2>
        <div className="flex-1 h-px bg-neutral-200"></div>
      </div>
      
      <div className="space-y-16">
        {experience.map((exp, idx) => (
          <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="md:w-1/4 flex-shrink-0 md:text-right pt-1">
              <p className="text-sm font-medium text-neutral-500 tracking-widest">{exp.date}</p>
              {exp.location && <p className="text-xs text-neutral-400 mt-1">{exp.location}</p>}
            </div>
            
            <div className="flex-1 relative">
              <div className="hidden md:block absolute -left-7 top-2.5 w-2 h-2 rounded-full bg-neutral-300 ring-4 ring-neutral-50"></div>
              
              <h3 className="text-xl font-bold text-neutral-900 mb-1">{exp.company}</h3>
              <p className="text-lg text-neutral-600 font-medium mb-4">{exp.role}</p>
              
              <ul className="space-y-2">
                {exp.desc.map((item, i) => (
                  <li key={i} className="text-neutral-600 text-sm leading-relaxed flex items-start">
                    <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
