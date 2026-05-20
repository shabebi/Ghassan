import React from "react";
import "./Brands.css";

import zarkoon from "../assets/logo1.png";
import sawahel from "../assets/logo2.png";

export default function Brands() {
  const logos = [zarkoon, sawahel];

  return (
    <section className="brands">
      <h2>Trademarks</h2>

      <div className="brands-slider">
        <div className="brands-track">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <img key={index} src={logo} alt="brand" />
          ))}
        </div>
      </div>

      <div className="brands-line"></div>
    </section>
  );
}