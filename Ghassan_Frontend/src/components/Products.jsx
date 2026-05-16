import React from "react";
import "./Products.css";

import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

export default function Products() {
  const products = [img1, img2, img3];

  return (
    <section id="products" className="products">
      <h2>منتجاتنا</h2>

      <div className="products-slider">
        <div className="products-track">
          {[...products, ...products, ...products].map((product, index) => (
            <img key={index} src={product} alt="product" />
          ))}
        </div>
      </div>
    </section>
  );
}