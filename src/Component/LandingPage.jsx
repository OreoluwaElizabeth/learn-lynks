import React from 'react';
import "./landingPage.css";
import About from './About';
import Features from './Features';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="hero-section">
                <div className="overlay">
                    <h1>Welcome to LearnLynks</h1>
                    <p>We envision a future where education 
                        is accessible, affordable and 
                        engaging for all.
                    </p>
                </div>
            </div>
            <About />
            <Features />
            <Footer />
        </div>
    )
}

export default LandingPage;