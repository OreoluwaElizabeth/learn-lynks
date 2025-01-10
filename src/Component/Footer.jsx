import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>About Us</h3>
              <p>
                LearnLynks is a cutting-edge education platform designed to
                revolutionize the way we learn.
              </p>
            </div>
            <div className="col-md-4">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="features">Features</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} LearnLynks. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;