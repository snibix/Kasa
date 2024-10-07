import React from "react";

function Banner({ imgBanner, withGradient = true, className = "", content }) {
  const bannerStyle = {
    background: withGradient
      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgBanner})`
      : `url(${imgBanner})`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
  };
  return (
    <div className={`banner-container ${className}`} style={bannerStyle}>
      <div className="content-banner">{content}</div>
    </div>
  );
}
export default Banner;
