import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo + Text */}
      <div className="brand">
        <img
          src={logo}
          alt="Ghassan Logo"
          className="logo"
        />

        <div className="brand-text">
          <h1>Ghassan Al-Batati Trading Establishment</h1>
          <p>مؤسسة غسان البطاطي للتجــارة</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-links">
        <a href="#products">Our Products</a>
        <a href="#about">About Us</a>
        <a href="#home">Home</a>
      </nav>

      {/* Burger Button */}
      <button
        className="burger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#products">Our Products</a>
      </div>
    </header>
  );
}