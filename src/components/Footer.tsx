import React from "react";
import { personalInfo } from "../data";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-neutral-200 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-serif font-semibold tracking-wider text-neutral-900">
          CYM<span className="text-neutral-400">.</span>
        </div>
        
        <div className="text-sm text-neutral-500">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
        
        <div className="flex gap-4">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Github</a>
          <a href={personalInfo.researchgate} target="_blank" rel="noreferrer" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">ResearchGate</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
