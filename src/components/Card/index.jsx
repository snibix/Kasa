import "../../style/Card.css";
import React from "react";
import Cards from "../Cards";

function Card({ title }) {
  return (
    <div className="card-container">
      <Cards />
    </div>
  );
}

export default Card;
