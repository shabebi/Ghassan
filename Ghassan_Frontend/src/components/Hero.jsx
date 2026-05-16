import React from "react";
import "./Hero.css";

import heroBg from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        <h1>مؤسسة غسان البطاطي للتجارة</h1>

        <div className="hero-buttons">
          <button className="primary-btn">اتصل بنا</button>
          <button className="secondary-btn">من نحن</button>
        </div>
      </div>
    </section>
  );
}