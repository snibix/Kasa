import React from "react";
import "../../style/Cards.css";
function Cards() {
  const cardsData = [
    { id: 1, title: "Titre de la location" },
    { id: 2, title: "Titre de la location" },
    { id: 3, title: "Titre de la location" },
    { id: 4, title: "Titre de la location" },
    { id: 5, title: "Titre de la location" },
    { id: 6, title: "Titre de la location" },
  ];
  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <div className="cards" key={card.id}>
          <h2 className="title-cards">{card.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Cards;
