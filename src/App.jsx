import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkExperience from "./components/Exp";
import Projects from "./components/Projects";
import LanguagesAndTools from "./components/Lang";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WorkExperience />
                <Projects />
                <LanguagesAndTools />
              </>
            }
          />
          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
