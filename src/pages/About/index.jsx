import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner/index";
import Footer from "../../components/Footer/index";
import bg from "../../assets/images/about.jpg";
import Dropdown from "../../components/Dropdown";

const dropdownOption = [
  {
    id: 1,
    label: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes",
  },
  {
    id: 2,
    label: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportements discriminatoires ou de pertubation du voisinage entraînera une exclusion de notre plateforme",
  },
  {
    id: 3,
    label: "Service",
    content:
      "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance",
  },
  {
    id: 4,
    label: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataires,cela permet à nos équipe de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la décurité domestique pour nos hôtes",
  },
];

function About() {
  return (
    <div className="App">
      <div className="content about-page">
        <Header />

        <Banner
          imgBanner={bg}
          withGradient={true}
          className="banner-about"
          gradient="linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 0, 0.8))"
          content={""}
        />

        <div className="dropdowns-about">
          {dropdownOption.map((option) => (
            <Dropdown
              key={option.id}
              className="dropdown-about"
              placeholder={option.label}
            >
              {option.content}
            </Dropdown>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
