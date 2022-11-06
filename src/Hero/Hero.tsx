import React from 'react';
import './Hero.scss';

function Hero() {
    // noselect class is defined in App.css and prevents text selection
    // image that looks great horizontally AND vertically
    return (
        <>
        <div className='hero'>
            <div className='hero-inner noselect'>
                <h2>hi i'm...</h2>
                <h1>johnny madigan</h1>
            </div>
        </div>
        </>
    );
}

export default Hero;