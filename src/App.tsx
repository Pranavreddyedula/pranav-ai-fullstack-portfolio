import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { NowBuilding } from './components/NowBuilding';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#E9E9E7] text-[#050505] selection:bg-[#050505] selection:text-white">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <NowBuilding />
        <GitHubSection />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
