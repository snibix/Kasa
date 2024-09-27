import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner/index";
import Footer from "../../components/Footer/index";
import bg from "../../assets/images/about.jpg";
import Dropdown from "../../components/Dropdown";
import "../../style/Banner.css";
import "../../style/About.css";
import "../../style/Header.css";

const dropdownOption = [];

function About() {
  const handleSelect = (option) => {
    console.log("selected option", option);
  };
  return (
    <div className="App">
      <div className="content">
        <Header />

        <Banner
          imgBanner={bg}
          withGradient={true}
          className="banner-about"
          gradient="linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 0, 0.8))"
          content={""}
        />

        <div className="dropdown-container">
          <Dropdown
            options={dropdownOption}
            onSelect={handleSelect}
            placeholder="Fiabilité"
          />
          <Dropdown
            options={dropdownOption}
            onSelect={handleSelect}
            placeholder="Respect"
          />
          <Dropdown
            options={dropdownOption}
            onSelect={handleSelect}
            placeholder="Service"
          />
          <Dropdown
            options={dropdownOption}
            onSelect={handleSelect}
            placeholder="Sécurité"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
