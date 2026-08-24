import React from "react";
import { education } from "../data";

const Education = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-3xl font-serif font-bold text-neutral-900">教育背景</h2>
        <div className="flex-1 h-px bg-neutral-200"></div>
      </div>
      
      <div className="space-y-12">
        {education.map((edu, idx) => (
          <div key={idx} className="group flex flex-col md:flex-row gap-4 md:gap-8 items-start">
            <div className="md:w-48 flex-shrink-0 pt-1">
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">{edu.date}</p>
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold text-neutral-900">{edu.school}</h3>
                <span className="text-sm font-medium text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full">{edu.gpa}</span>
              </div>
              <p className="text-lg text-neutral-700 font-medium">{edu.degree}</p>
              <p className="text-neutral-500 text-sm leading-relaxed">{edu.courses}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
