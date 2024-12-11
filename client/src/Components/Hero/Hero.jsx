import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/wave.png'
import { FaArrowRight } from "react-icons/fa6";
import girl_image from '../Assets/girl5.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
     <h2>NEW ARRIVALS ONLY</h2>
     <div>
        <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="hand icon"/>
        </div>
        <p>collection</p>
        <p>for everyone</p>
     </div>
     <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <span><FaArrowRight /></span>
     </div>
    </div>
    <div className="hero-right">
      <img src={girl_image}alt="girl"/>
    </div>
    </div>
  )
}

export default Hero


