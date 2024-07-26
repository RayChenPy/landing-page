import './App.css';
import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import CarouselImg from './components/carousel/carousel';
import Navbar from './Navbar';
import About from  "./components/about/about";
import Education_Experience from  "./components/education_experience/education_experience";
import Projects from "./components/projects/projects";
import ScrollToHashElement from "./components/ScrollToHashElement";

function App() {
  return (      
    <Router>
      <div className="app">
        <div className="side">
          <Navbar/>
        </div>
        <div className="main">
          <ScrollToHashElement />
          <CarouselImg/>
          <Projects/>
          <About/>
          <Education_Experience/>
          {/* <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="projects" element={<Projects/>}/>
              <Route path="about" element={<About/>} />
              <Route path="education" element={<Education/>}/>
              <Route path="experience" element={<Experience/>}/>
              <Route path="*" element={<Home />} />
          </Routes> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
