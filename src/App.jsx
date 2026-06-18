import { Routes, Route } from "react-router-dom";
import AllCertifications from "./pages/AllCertifications";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Hackathons from "./components/Hackathons";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarsBackground from "./components/StarsBackground";
import AllHackathons from "./pages/AllHackathons";

import AllProjects from "./pages/AllProjects";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <Education />
      <Hackathons />
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
          <Route path="/certifications" element={<AllCertifications />} />
          <Route path="/hackathons" element={<AllHackathons />} />
        </Routes>
      </div>
    </>
  );
}

export default App;