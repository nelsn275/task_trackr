import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

//Pages
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import About from './pages/About';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ThankYou from './pages/ThankYou';

function App() {
  return (

    <div className="App">

      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;