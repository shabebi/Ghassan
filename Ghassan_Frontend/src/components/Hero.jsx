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
        <h1>مؤسسة غسان البطاطي للتجارة</h1>

        <div className="hero-buttons">
          <a href="#contact" className="primary-btn">
            اتصل بنا
          </a>

          <a href="#about" className="secondary-btn">
            من نحن
          </a>
        </div>
      </div>
    </section>
  );
}