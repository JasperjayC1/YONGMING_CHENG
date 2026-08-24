import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200/50"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-serif font-semibold tracking-wider text-neutral-900">
          CYM<span className="text-neutral-400">.</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <a href="#about" className="hover:text-neutral-900 transition-colors">关于</a>
          <a href="#experience" className="hover:text-neutral-900 transition-colors">经历</a>
          <a href="#projects" className="hover:text-neutral-900 transition-colors">科研</a>
          <a href="#gallery" className="hover:text-neutral-900 transition-colors">作品集</a>
        </nav>
        <a
          href="mailto:s20213091740@cau.edu.cn"
          className="text-sm font-medium px-5 py-2.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
        >
          联系我
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
