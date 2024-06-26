import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Showcase from './pages/Showcase';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';

function App() {
  return (

    <div className="App">

      {/* <PartialShowcase /> */}
      <Header />
      <Router>
        <div>
          <Routes>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/showcase" element={<Showcase />} />
          </Routes>
        </div>
      </Router>
      <Footer />

    </div>
  );
}

export default App;