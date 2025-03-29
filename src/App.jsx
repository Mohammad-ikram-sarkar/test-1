import Navbar from "./components/pages/header";
import HeroSection from "./components/pages/HeroSection";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Layout() {
  return (
    <Router>
      <div className="bg-[#0A0A0A] text-white">
        {/* Fixed Navbar */}
        <Navbar className="fixed top-0 left-0 w-full z-10 mt-10" />

        {/* Main Content */}
        <main className="pt-24 flex flex-col items-center space-y-10 min-h-screen">
          {/* Hero Section */}
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
