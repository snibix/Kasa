import React from "react";
import { useNavigate } from "react-router-dom";

import "../../style/Cards.css";

function Cards({ logements }) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/logement/${id}`);
  };

  return (
    <div className="cards-container">
      {logements.map((card) => (
        <div
          className="cards"
          key={card.id}
          onClick={() => handleCardClick(card.id)}
        >
          <h2 className="title-cards">{card.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Cards;
