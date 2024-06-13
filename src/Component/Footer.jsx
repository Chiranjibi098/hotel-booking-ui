import React from 'react';
import "../assets/CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper-footer">
        <div className="row">
          <div className="col-1">
            <div className="logo-footer">goforit</div>
          </div>
          <div className="col-2">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: contact@goforit.com</li>
              <li>Phone: +1234567890</li>
              <li>Address: patia, Bhubaneswar</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p className="text-center">
              © {new Date().getFullYear()} goforit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;