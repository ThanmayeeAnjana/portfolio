import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarsBackground from "./components/StarsBackground";

import AllProjects from "./pages/AllProjects";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <CodingProfiles />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <StarsBackground />

      <div className="relative z-10 bg-transparent text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;