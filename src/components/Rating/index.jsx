import React, { useState } from "react";

function Star({ filled, onClick, readOnly }) {
  return (
    <span
      onClick={!readOnly ? onClick : undefined}
      style={{
        cursor: readOnly ? "default" : "pointer",
        color: filled ? "#FF6060" : "#e4e5e9",
        fontSize: "40px",
      }}
    >
      ★
    </span>
  );
}

function Rating({ initialRating = 0, totalStars = 5, readOnly = false }) {
  const [rating] = useState(initialRating);

  return (
    <div>
      {Array.from({ length: totalStars }).map((_, index) => (
        <Star key={index} filled={index < rating} readOnly={readOnly} />
      ))}
    </div>
  );
}

export default Rating;
