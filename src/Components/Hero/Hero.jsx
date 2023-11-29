import React from 'react'
import './Hero.css'
import hello_icon from '../Assets/hello.png'
import arrow_icon from '../Assets/arrow.png'
import model_img from '../Assets/hero1.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
            <div className="hero-hand-icon">
                <p>New</p>
                <img src={hello_icon} alt=""/>
            </div>
            <p>Collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>
                Latest Collection
            </div>
            <img style={{height:'30px', width:'30px'}} src={arrow_icon} alt=""/>
        </div>
      </div>
      <div className="hero-right">
         <img style={{height:'800px'}} src={model_img} alt=""/>
      </div>
    </div>
)
}

export default Hero
