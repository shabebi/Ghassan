import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-divider"></div>

      <footer className="footer">
        {/* Pages */}
        <div className="footer-column">
          <h3>صفحاتنا</h3>

          <a href="#">الرئيسية</a>
          <a href="#">من نحن</a>
          <a href="#">منتجاتنا</a>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>اتصل بنا</h3>

          <p>772192505</p>
          <p>771555586</p>
          <p>771776904</p>
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