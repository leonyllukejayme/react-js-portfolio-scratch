import "./FooterStyles.css";

import React from "react";
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitch, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
          <div>
            <p>Davao City, Davao del Sur</p>
            <p>Philippines</p>
          </div>
        </div>
        <div className="phone">
          <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
          +63-912-345-67890</h4>
        </div>
        <div className="phone">
          <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
          e_mail@mail.com</h4>
        </div>
      </div>
      <div className="right">
        <h4>About the company</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum culpa, illo obcaecati nostrum temporibus mollitia?</p>
        <div className="social">
        <a href="https://facebook.com/"><FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}} /></a>
        <a href="https://twitter.com"><FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}} /></a>
        <a href="https://linkedin.com"><FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} /></a>
        <a href="https://github.com"><FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}} /></a>
        <a href="https://twitch.tv"><FaTwitch size={30} style={{color:"#fff", marginRight:"1rem"}} /></a>
        </div>
      </div>
    </div>
  </div>;
};

export default Footer;
