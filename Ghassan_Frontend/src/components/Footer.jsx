import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-divider"></div>

      <footer id="contact" className="footer">
        {/* Pages */}
        <div className="footer-column">
        <h3>صفحاتنا</h3>

        <a href="#home">الرئيسية</a>
        <a href="#about">من نحن</a>
        <a href="#products">منتجاتنا</a>
        </div>

        {/* Contact */}
        <div className="footer-column">
        <h3>اتصل بنا</h3>

        <a href="tel:772192505">772192505</a>
        <a href="tel:771555586">771555586</a>
        <a href="tel:771776904">771776904</a>
        </div>

        {/* Brand */}
        <div className="footer-brand">
          <h2>مؤسسة غسان البطاطي للتجارة</h2>

          <span>Ghassan Al-Batati Trading Establishment</span>

          <div className="footer-socials">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-x-twitter"></i>
          </div>
        </div>
      </footer>
    </>
  );
}