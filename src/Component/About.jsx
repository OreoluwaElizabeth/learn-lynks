import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='house'>
            <div className='about-section'>
                <h2 className='section-title'>About Us</h2>
                <p className='section-description'>
                    LearnLynks is a cutting-edge education
                    platform designed to revolutionize the way we learn.
                    Our mission is to provide a comprehensive and interactive
                    learning experience that bridges the gap between traditional 
                    classroom learning and modern technology.
                </p>
            </div>
            <div className='vision-section'>
                <h2 className='section-title'>Our Vision</h2>
                <p className='section-description'>
                    At LearnLynks, we envision a future where education is 
                    accessible, affordable, and engaging for all. We aim to 
                    create a global community of learners who can acquire 
                    new skils, knowledge, and perspectives in a fun and 
                    effective way.
                </p>
            </div>
        </div>
    );
};

export default About;