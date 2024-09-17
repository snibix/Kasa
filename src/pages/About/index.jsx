import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner/index";

import bg from "../../assets/images/about.jpg";
import "../../style/Banner.css";
import Dropdown from "../../components/Dropdown";

const dropdownOption = [
  { value: "1", label: "Fiabilité" },
  { value: "2", label: "Respect" },
  { value: "3", label: "Services" },
  { value: "4", label: "Sécurité" },
];

const dropdownOptionEquipements = [
  { value: "1", label: "Climatisation" },
  { value: "2", label: "Wi-fi" },
  { value: "3", label: "Cuisine" },
  { value: "4", label: "Espace de travail" },
  { value: "5", label: "Fer à repasser" },
  { value: "6", label: "Sèche-cheveux" },
  { value: "7", label: "Cintres" },
];

function About() {
  const handleSelect = (option) => {
    console.log("selected option", option);
  };
  return (
    <div className="App">
      <div className="header">
        <Header />
        <Banner
          imgBanner={bg}
          withGradient={true}
          className="banner-about"
          gradient="linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 0, 0.8))"
          content={""}
        />
        <Dropdown
          options={dropdownOption}
          onSelect={handleSelect}
          placeholder="Select"
        />
        <Dropdown
          options={dropdownOptionEquipements}
          onSelect={handleSelect}
          placeholder="Équipements"
        />
      </div>
    </div>
  );
}

export default About;
