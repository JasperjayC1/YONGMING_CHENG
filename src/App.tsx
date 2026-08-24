/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-neutral-200 selection:text-neutral-900">
      <Header />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Publications />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
