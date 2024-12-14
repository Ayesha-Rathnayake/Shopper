import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo3.png'
import { FiInstagram } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
    </ul>

    <div className="footer-social-icons">
        <div className="footer-icons-container">
        <AiOutlineFacebook className="social-icon" />
        <FiInstagram className="social-icon"/>
        <FaWhatsapp className="social-icon"/>
        </div>
    </div>
    <div className="footer-copyright">
        <hr/>
        <p>copyright @ 2024 - All Right Reserved</p>
    </div>
    </div>
  )
}

export default Footer
