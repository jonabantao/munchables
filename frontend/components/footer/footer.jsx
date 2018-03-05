import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="https://www.linkedin.com/in/jmabantao">
          <i className="fab fa-linkedin footer__icon"></i>
        </a>
        <a href="https://github.com/jonabantao">
          <i className="fab fa-github footer__icon"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;