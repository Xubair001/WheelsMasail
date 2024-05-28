import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css'
import Navbar from "./Pages/navbar/Navbar";
import Chatbot from "./Pages/Chatbot";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer/Footer";


const App = () => {
  

  return (
    
    <Router>
      <div>
        <Navbar />
        
        <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/chatbot" element={<Chatbot />} />  
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
};

export default App;
