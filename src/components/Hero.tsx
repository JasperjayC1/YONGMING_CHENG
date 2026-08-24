import React from "react";
import { motion } from "motion/react";
import { personalInfo } from "../data";
import { Github, FileText, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="pt-40 pb-20 px-6 max-w-6xl mx-auto min-h-[85vh] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-neutral-900 mb-4 leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl text-neutral-500 font-serif tracking-wide">
              {personalInfo.enName}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-12 h-1 bg-neutral-900"
          ></motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-medium text-neutral-800">
              {personalInfo.title}
            </h2>
            <p className="text-neutral-600 leading-relaxed text-lg max-w-2xl">
              {personalInfo.about}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors bg-neutral-100 px-4 py-2 rounded-full">
              <Mail size={16} />
              {personalInfo.email}
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors bg-neutral-100 px-4 py-2 rounded-full">
              <Github size={16} />
              Github
            </a>
            <a href={personalInfo.researchgate} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors bg-neutral-100 px-4 py-2 rounded-full">
              <FileText size={16} />
              ResearchGate
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl bg-neutral-200">
            {/* Placeholder for Profile Photo */}
            <img 
              src="/avatar.jpg" 
              alt="Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;