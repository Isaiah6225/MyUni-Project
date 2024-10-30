import React from 'react';
import './Login.css'; 

const Login = () => {
  return (
    <div className="login-container">
      <header className="header">
        <div className="logo">MyUni</div>
        <nav className="nav">
          <a href="/support">Support</a>
          <a href="/signup" className="signup-button">Sign Up</a>
        </nav>
      </header>
      <div className="background-images">
        {/* Background images can be set using CSS */}
      </div>
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <p>We're so excited to see you again!</p>
        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="Email" required />
          <label>Password</label>
          <input type="password" placeholder="Password" required />
          <a href="/forgot-password" className="forgot-password">Forgot your password?</a>
          <button type="submit" className="login-button">Log In</button>
        </form>
      </div>
      <footer className="footer">
        <a href="/privacy">Privacy</a>
      </footer>
    </div>
  );
};

export default Login;
