import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img-1.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>Buy & Sell Crypto 24/7 using your Naira account</p>
                    <h1>Turn that shikinni money to millions by investing today</h1>
                    <p>Buy and Sell all kinds of cryptocurrencies at the best rate ever</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
