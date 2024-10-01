import { useParams } from "react-router-dom";
import data from "../../data/data.json";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Tag from "../../components/Tag";
import Rating from "../../components/Rating";

import "../../style/FicheLogement.css";
import bg from "../../assets/images/img-logement.png";
import Dropdown from "../../components/Dropdown";

function FicheLogement() {
  const { id } = useParams(); // Récupérer l'ID du logement
  const logement = data.find((item) => item.id === id); // Trouver le logement correspondant

  if (!logement) {
    return <div>Logement non trouvé</div>; // Gérer le cas où le logement n'est pas trouvé
  }

  return (
    <div className="App">
      <div className="content">
        <Header />
        <Banner
          imgBanner={logement.pictures[0]} // Image principale du logement
          withGradient={false}
          className="banner-logement"
        />
        <div className="content-logements">
          <div className="content-logement">
            <div className="content-infos">
              <div className="fiche-title">
                <h3>{logement.title}</h3>
                <p>{logement.location}</p>
              </div>

              <div className="notation">
                <div className="tags">
                  {logement.tags.map((tag, index) => (
                    <Tag key={index} placeholder={tag} />
                  ))}
                </div>
              </div>
            </div>

            <div className="content-name">
              <div className="user">
                <p>{logement.host.name}</p>
                <div className="img-user">
                  <img src={logement.host.picture} alt={logement.host.name} />
                </div>
              </div>
              <div className="stars">
                <Rating rating={logement.rating} />
              </div>
            </div>
          </div>
          <div className="fiche-dropdown">
            <Dropdown className="dropdown-logement" placeholder="Description">
              <p>{logement.description}</p>
            </Dropdown>
            <Dropdown placeholder="Équipements">
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Dropdown>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default FicheLogement;
