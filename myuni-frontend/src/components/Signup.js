
import React from 'react';
import './Login.css'; //using the same login css 

const Signup = () => {
  return (
    <div className="signup-container">
      <header className="header">
        <div className="logo">MyUni</div>
        <nav className="nav">
          <a href="/support">Support</a>
          <a href="/login" className="login-button">Log In</a>
        </nav>
      </header>
      <div className="background-images"></div>
      <div className="signup-box">
        <h2>Join Us!</h2>
        <p>Create an account to get started</p>
        <form className="signup-form">
          <label>Email</label>
          <input type="email" placeholder="Email" required />
          
          <label>Password</label>
          <input type="password" placeholder="Password" required />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" required />
          
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
      <footer className="footer">
        <a href="/privacy">Privacy</a>
      </footer>
    </div>
  );
};

export default Signup;
