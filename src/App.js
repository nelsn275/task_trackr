import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Showcase from './pages/Showcase';
import logo from './logo.svg';
import './App.css';
import PartialShowcase from './partials/PartialShowcase';
import Header from './partials/Header';

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

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;