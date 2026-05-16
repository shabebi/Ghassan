import React from "react";
import "./AboutCards.css";

export default function AboutCards() {
  const cards = [
    {
      title: "Who We Are",
      text: "Ghassan Al-Battati Trading Establishment is dedicated to providing integrated and innovative business solutions that meet the needs of both local and regional markets. We act as a bridge between high quality and competitive pricing, committed to delivering the best products and services that ensure customer satisfaction and support business success.",
    },

    {
      title: "Our Vision",
      text: "To become the first choice and the most trusted partner in the trading sector through continuous excellence and ongoing development of our services.",
    },

    {
      title: "Our Mission",
      text: "To deliver products of exceptional quality through reliable supply chains, while focusing on building sustainable long-term relationships with our clients and partners based on transparency and integrity.",
    },
  ];

  return (
    <section id="about" className="about-cards">
      <div className="about-slider">
        <div className="about-track">
          {[...cards, ...cards, ...cards].map((card, index) => (
            <div className="about-card" key={index}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}