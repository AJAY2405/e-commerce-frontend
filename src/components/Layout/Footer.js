import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer p-4 bg-gray-800 text-white">
      <h1 className="text-center text-lg font-bold">
        🧊Crystal Clear - Your Trusted Source for Quality Products
      </h1>

      <p className="text-center mt-3 space-x-4">
        <Link to="/about" className="hover:underline">About</Link> |
        <Link to="/contact" className="hover:underline">Contact</Link> |
        <Link to="/policy" className="hover:underline">Privacy Policy</Link>
      </p>

      <div className="text-center mt-4 flex justify-center space-x-6">
        <a href="https://github.com/AJAY2405" target="_blank" rel="noopener noreferrer">
          🐱 GitHub
        </a>
        <a href="www.linkedin.com/in/ajay-sahani-464a38298" target="_blank" rel="noopener noreferrer">
          🔗 LinkedIn
        </a>
        <a href="mailto:ajay2411sahani@gmail.com">
          📧 Gmail
        </a>
        <a href="https://x.com/AJAYSAHANI97389" target="_blank" rel="noopener noreferrer">
          🐦 Twitter
        </a>
        <a href="https://facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
          📘 Facebook
        </a>
        <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
          📸 Instagram
        </a>
      </div>
      <p className="text-center mt-4 text-sm">
        &copy; {new Date().getFullYear()} Crystal Clear. All rights reserved. 
        <br />    
        Made with by @jay $ahani

      </p>
    </div>
  );
};

export default Footer;
