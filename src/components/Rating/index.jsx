import React, { useState } from "react";

function Star({ filled, onClick }) {
  return (
    <span
      onClick={onClick}
      style={{
        cursor: "pointer",
        color: filled ? "#FF6060" : "#e4e5e9",
        fontSize: "40px",
      }}
    >
      ★
    </span>
  );
}

function Rating({ totalStars = 5 }) {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      {Array.from({ length: totalStars }).map((_, index) => (
        <Star
          key={index}
          filled={index < rating}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
}

export default Rating;
