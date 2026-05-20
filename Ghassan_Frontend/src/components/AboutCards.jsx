import React from "react";
import "./AboutCards.css";

export default function AboutCards() {
  const cards = [
    {
      title: "About Us",
      text: "Since 2018, we have been operating from our headquarters in Aden, committed to serving customers who value premium-quality products. Customer satisfaction has always been our highest priority, driving every aspect of our business. With the trust and continued support of our clients, we have successfully expanded our presence across several governorates and major cities, including Hadhramaut, Al Hudaydah, Sana'a, and Taiz. As a rapidly growing company, we are continuously working toward expanding our footprint beyond local markets and into international destinations such as India and Indonesia, with the ambition of building a strong global presence",
    },

    {
      title: "Our Mission",
      text: "To serve our customers with the highest level of satisfaction and reliability, while continuously maintaining and strengthening our company’s reputation for quality, trust, and excellence.",
    },
  ];

  return (
    <section id="about" className="about-cards">
      <div className="about-slider">
        <div className="about-track">
          {[...cards, ...cards, ...cards].map((card, index) => (
            <div
              className={`about-card ${
                card.title === "About Us"
                  ? "about-big"
                  : "about-small"
              }`}
              key={index}
            >
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}