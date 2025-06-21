import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer p-4 bg-black-400 text-white">
      <h1 className="text-center text-lg font-bold">
        🧊Crystal Clear - Your Trusted Source for Quality Products
      </h1>

      <p className="text-center mt-3 space-x-4">
        <Link to="/about" className="hover:underline">About</Link> |
        <Link to="/contact" className="hover:underline">Contact</Link> |
        <Link to="/policy" className="hover:underline">Privacy Policy</Link>
      </p>

      <div className="text-center mt-4 flex justify-center space-y-8">
        <a href="https://github.com/AJAY2405" target="_blank" rel="noopener noreferrer">
           <FaGithub className="hover:text-gray-700" /> Github
        </a>
        <a href="www.linkedin.com/in/ajay-sahani-464a38298" target="_blank" rel="noopener noreferrer">
           <FaLinkedin className="hover:text-blue-700" /> LinkedIn
        </a>
        <a href="mailto:ajay2411sahani@gmail.com">
            <SiGmail className="hover:text-red-500" /> Gmail
        </a>
        <a href="https://x.com/AJAYSAHANI97389" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-sky-500" /> Twitter
        </a>
        <a href="https://facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
           <FaFacebook className="hover:text-blue-600" /> Facebook
        </a>
        <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className=" hover:text-pink-600" /> Instagram
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
