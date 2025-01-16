import React from 'react';
import './features.css';

const Features = () => {
  return (
    <div className="features-container">
      <div className="key-features-section">
        <h2>Key Features</h2>
        <div className="key-features-grid">
          <div className="feature-item">
            <h3>Personalized Learning</h3>
            <p>Learn at your own pace with our adaptive learning platform.</p>
          </div>
          <div className="feature-item">
            <h3>Interactive Content</h3>
            <p>Engage with interactive simulations, videos, and quizzes.</p>
          </div>
          <div className="feature-item">
            <h3>Community Support</h3>
            <p>Connect with peers and instructors through our online community.</p>
          </div>
          <div className="feature-item">
            <h3>Progress Tracking</h3>
            <p>Track your progress and stay motivated with our analytics dashboard.</p>
          </div>
        </div>
      </div>
      <div className="benefits-section">
        <h2>Benefits</h2>
        <ul className="benefits-list">
          <li className="benefit-item">Flexibility: Learn on your own schedule.</li>
          <li className="benefit-item">Affordability: Access high-quality education at a lower cost.</li>
          <li className="benefit-item">Career Advancement: Enhance your skills and boost your career prospects.</li>
          <li className="benefit-item">Networking Opportunities: Connect with peers and professionals in your industry.</li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
