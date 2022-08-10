import React from "react";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import Blog from "./Components/Pages/Blog";
import Navbar from "./Components/inc/Narbar";
import { Routes, Route,} from "react-router-dom";
import './style.css';
import Footer from "./Components/inc/Footer";

function App() {
    return (
    <div className = "App" >
    <Navbar/>
    
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer/>
      
    </div> 
    );
}

export default App;