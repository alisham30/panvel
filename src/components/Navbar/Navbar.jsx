import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LoginForm from '../LoginForm/LoginForm.jsx';
import SignUpForm from '../SignUpForm/SignUpForm.jsx';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  const handleSwitchToSignUp = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignUp(false);
    setShowLogin(true);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src={logo} alt="Noter AI Logo" />
        </Link>
      </div>
      
      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#history">History</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#feedback">Feedback</a></li>
        </ul>
      </div>
      
      <div className="navbar-right">
        <button className="login-btn" onClick={handleLoginClick}>Log In</button>
        <button className="signup-btn" onClick={handleSignUpClick}>Sign Up</button>
      </div>

      {showLogin && (
        <LoginForm 
          onClose={handleCloseLogin} 
          onSwitchToSignUp={handleSwitchToSignUp}
        />
      )}

      {showSignUp && (
        <SignUpForm 
          onClose={handleCloseSignUp} 
          onSwitchToLogin={handleSwitchToLogin}
        />
      )}
    </nav>
  );
};

export default Navbar;
