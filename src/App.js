import React from "react";

// Global Styles
import "./App.css";
import "./styles/global.css";
import "./styles/animations.css";
import "./styles/variables.css";

// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

// Hooks
import useTheme from "./hooks/useTheme";

function App() {
  // light/dark theme handled globally
  useTheme();

  return (
    <div id="app" className="page-transition">

      {/* NAVBAR */}
      <Navbar />

      {/* ALL SECTIONS */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;
