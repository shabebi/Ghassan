import React from "react";
import "./AboutCards.css";

export default function AboutCards() {
  const cards = [
    {
      title: "من نحن",
      text: "مؤسسة غسان البطاطي للتجارة مؤسسة تسعى إلى تقديم حلول تجارية متكاملة ومبتكرة تلبي احتياجات السوق المحلية والإقليمية. نحن نعمل كجسر يربط بين الجودة العالية والتنافسية السعرية، ملتزمين بتوفير أفضل المنتجات والخدمات التي تضمن رضا عملائنا وتدعم نجاح أعمالهم.",
    },

    {
      title: "رؤيتنا",
      text: "أن نكون الخيار الأول والشريك الأكثر موثوقية في قطاع التجارة، من خلال التميز المستمر والتطوير الدائم لخدماتنا.",
    },

    {
      title: "رسالتنا",
      text: "تقديم منتجات ذات جودة استثنائية عبر سلاسل إمداد موثوقة، مع التركيز على بناء علاقات مستدامة طويلة الأمد مع عملائنا وشركائنا قائمة على الشفافية والنزاهة.",
    },
  ];

  return (
    <section className="about-cards">
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