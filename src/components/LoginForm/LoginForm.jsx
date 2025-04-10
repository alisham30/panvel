import React, { useState } from 'react';
import './LoginForm.css';
import googleIcon from '../../assets/google.webp';
import appleIcon from '../../assets/apple.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = ({ onClose, onSwitchToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form-container" onClick={onClose}>
      <div className="login-form" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Welcome Back</h2>
        <p className="subtitle">Log in to continue to Noter AI</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          
          <div className="forgot-password">
            <a href="#" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
          </div>
          
          <button type="submit" className="form-login-btn">Log In</button>
        </form>
        
        <div className="divider">
          <span>or continue with</span>
        </div>
        
        <div className="social-login">
          <button className="social-btn">
            <img src={googleIcon} alt="Google" />
            Log in with Google
          </button>
          <button className="social-btn">
            <img src={appleIcon} alt="Apple" />
            Log in with Apple
          </button>
        </div>
        
        <div className="signup-link">
          Don't have an account? <a href="#" onClick={(e) => {
            e.preventDefault();
            onClose();
            onSwitchToSignUp();
          }}>Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm; 