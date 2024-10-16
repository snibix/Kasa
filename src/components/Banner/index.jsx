import React, { useState } from "react";
import arrowLeft from "../../assets/icons/arrow-left.png";
import arrowRight from "../../assets/icons/arrow-right.png";

function Banner({
  imgBanner = [],
  withGradient = true,
  className = "",
  content,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gère l'image suivante
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgBanner.length);
  };

  // Gère l'image précédente
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgBanner.length - 1 : prevIndex - 1
    );
  };

  const bannerStyle = {
    backgroundImage: withGradient
      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgBanner[currentIndex]})`
      : `url(${imgBanner[currentIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className={`banner-container ${className}`} style={bannerStyle}>
      {imgBanner.length > 1 && (
        <>
          <div className="container-arrow">
            <button onClick={prevImage}>
              <img className="arrow" src={arrowLeft} alt="Précédent"></img>
            </button>
            <button onClick={nextImage}>
              <img className="arrow" src={arrowRight} alt="Suivant"></img>
            </button>
          </div>
        </>
      )}
      <div className="content-banner">{content}</div>
      {imgBanner.length > 1 && (
        <div className="image-counter">
          {currentIndex + 1} / {imgBanner.length}
        </div>
      )}
    </div>
  );
}

export default Banner;
