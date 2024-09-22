import React from "react";
import "./section2.scss";

function Section2() {
  const cards = [
    {
      img: "https://printify.com/pfh/assets/legacy/higher-profits.svg",
      h1: "Higher Profits",
      p: "We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
    },
    {
      img: "https://printify.com/pfh/assets/legacy/robust-scaling.svg",
      h1: "Robust Scaling",
      p: "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
    },
    {
      img: "https://printify.com/pfh/assets/legacy/best-selection.svg",
      h1: "Best Selection",
      p: "With 900+ products and top quality brands, you can choose the best products for your business.",
    },
  ];
  return (
    <>
      <div className="section2">
        {cards.map((e) => (
          <div key={e.h1} className="card">
            <div className="card-img">
              <img src={e.img} alt={e.h1} />
            </div>
            <h2>{e.h1}</h2>
            <p>{e.p}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Section2;
