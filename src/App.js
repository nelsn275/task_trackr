import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Showcase from './pages/Showcase';
import logo from './logo.svg';
import ThankYou from './pages/ThankYou';
import './App.css';
import PartialShowcase from './partials/PartialShowcase';
import Header from './partials/Header';

function App() {
  return (

    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/partial" element={<PartialShowcase />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/thankyou" element={<ThankYou/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;