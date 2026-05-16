import React from "react";
import "./Hero.css";

import heroBg from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        <h1>Ghassan Al-Batati Trading Establishment</h1>

        <div className="hero-buttons">
          <a href="#contact" className="primary-btn">
            Contact Us
          </a>

          <a href="#about" className="secondary-btn">
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}