import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-divider"></div>

      <footer id="contact" className="footer">

        {/* Brand */}
        <div className="footer-brand">
          <h2>Ghassan Al-Batati Trading Establishment</h2>

          <span>مؤسسة غسان البطاطي للتجــارة</span>

          <div className="footer-socials">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-x-twitter"></i>
          </div>
        </div>
                {/* Pages */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Our Products</a>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <a href="mailto:info@ghbotrading.com">info@ghbotrading.com</a>
          <a href="tel:772192505">772192505</a>
          <a href="tel:771555586">771555586</a>
          <a href="tel:771776904">771776904</a>
        </div>
      </footer>
    </>
  );
}