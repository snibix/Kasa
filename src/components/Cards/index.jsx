import React from "react";
import { useNavigate } from "react-router-dom";

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
          style={{ backgroundImage: `url(${card.cover})` }}
        >
          <h2 className="title-cards">{card.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Cards;
