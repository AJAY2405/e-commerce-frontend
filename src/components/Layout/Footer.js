import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Brand */}
      <h2 className="footer-title">
        🧊 Crystal <span>Clear</span>
      </h2>

      {/* Navigation */}
      <div className="footer-links">
        <Link to="/about">About</Link>
        <span>•</span>
        <Link to="/contact">Contact</Link>
        <span>•</span>
        <Link to="/policy">Privacy</Link>
      </div>

      {/* Social Icons */}
      <div className="footer-icons">
        <a href="https://github.com/AJAY2405" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ajay-sahani-464a38298" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:ajay2411sahani@gmail.com">
          <SiGmail />
        </a>
        <a href="https://x.com/AJAYSAHANI97389" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/yourinstagram" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>

      {/* Copyright */}
      <p className="footer-copy">
        © {new Date().getFullYear()} Crystal Clear · Built by Ajay Sahani
      </p>

      {/* Inline CSS */}
      <style>{`
        .footer-container {
          background: linear-gradient(180deg, #020617, #000);
          padding: 40px 16px 25px;
          text-align: center;
          color: #cbd5f5;
        }

        .footer-title {
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #ffffff;
        }

        .footer-title span {
          color: #38bdf8;
        }

        .footer-links {
          margin-top: 10px;
          font-size: 0.9rem;
          display: flex;
          justify-content: center;
          gap: 10px;
          color: #94a3b8;
        }

        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        .footer-icons {
          margin-top: 18px;
          display: flex;
          justify-content: center;
          gap: 20px;
          font-size: 1.4rem;
        }

        .footer-icons a {
          color: #94a3b8;
          transition: transform 0.3s, color 0.3s;
        }

        .footer-icons a:hover {
          transform: translateY(-4px) scale(1.1);
          color: #38bdf8;
        }

        .footer-copy {
          margin-top: 18px;
          font-size: 0.75rem;
          color: #64748b;
        }

        @media (max-width: 600px) {
          .footer-title {
            font-size: 1.3rem;
          }

          .footer-icons {
            font-size: 1.25rem;
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
