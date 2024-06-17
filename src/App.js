import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';


//Partial Imports
import Header from './partials/Header';
import Footer from './partials/Footer'

//Page Imports
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Showcase from './pages/Showcase';
import Showcase from './pages/Showcase';
import logo from './logo.svg';
import ThankYou from './pages/ThankYou';
import './App.css';
import PartialShowcase from './partials/PartialShowcase';
import Header from './partials/Header';
import Register from './pages/Register';
import SignIn from './pages/SignIn';

import Showcase from './pages/Showcase';
import logo from './logo.svg';
import ThankYou from './pages/ThankYou';
import './App.css';
import PartialShowcase from './partials/PartialShowcase';
import Header from './partials/Header';

function App() {
  return (

    <div className="App">

      {/* <PartialShowcase /> */}
      <Header />
      <AuthProvider>
        <Router>
          <div>
            <Routes>
              <Route path="/dashboard" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/showcase" element={<Showcase />} />
              <Route path="/register" element={<Register />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    <Footer />
    </div>
  );
}

export default App;