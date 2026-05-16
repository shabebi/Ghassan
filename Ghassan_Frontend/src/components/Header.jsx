import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      {/* Navigation */}
      <nav className="nav-links">
        <a href="#products">Our Products</a>
        <a href="#about">About Us</a>
        <a href="#home">Home</a>
      </nav>

      {/* Logo + Text */}
      <div className="brand">
        <div className="brand-text">
          <h1>Ghassan Al-Batati Trading Establishment</h1>
          <p>Trusted Quality & Reliable Trading Solutions</p>
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