import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Clients from './components/Clients';
import Awards from './components/Awards';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (

   <div className='App' style={{width:'1200px'}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
