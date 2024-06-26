import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
//Page Imports
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import ThankYou from './pages/ThankYou';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import Showcase from './pages/Showcase';
import Header from './partials/Header';
import Footer from './partials/Footer';

function App() {
  return (

    <div className="App">

      
      <AuthProvider>
        <Header />
        <Router>
          <div>
            <Routes>
              <Route path="/dashboard" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/showcase" element={<Showcase />} />
              <Route path="/register" element={<Register />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/thankyou" element={<ThankYou />} />
            </Routes>
          </div>
        </Router>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;