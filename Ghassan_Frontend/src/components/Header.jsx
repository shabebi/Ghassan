import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      {/* Navigation */}
      <nav className="nav-links">
        <a href="#products">منتجاتنا</a>
        <a href="#about">من نحن</a>
        <a href="#home">الرئيسية</a>
      </nav>

      {/* Logo + Text */}
      <div className="brand">
        <div className="brand-text">
          <h1>مؤسسة غسان البطاطي للتجارة</h1>
          <p>Ghassan Al-Batati Trading Establishment</p>
        </div>

        <img
          src={logo}
          alt="Ghassan Logo"
          className="logo"
        />
      </div>
    </header>
  );
}