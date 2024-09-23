import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Tag from "../../components/Tag";
import Rating from "../../components/Rating";

import "../../style/FicheLogement.css";
import bg from "../../assets/images/img-logement.png";
import Dropdown from "../../components/Dropdown";

function FicheLogement() {
  const option = [];
  return (
    <div className="App">
      <div className="container-logement content">
        <Header />
        <Banner
          imgBanner={bg}
          withGradient={false}
          className="banner-logement"
        />
        <div className="content-logement">
          <div className="fiche-title">
            <h3>Cozy loft on the Canal Saint-Martin</h3>
            <p>Paris, île-de-France</p>
          </div>
          <div className="content-name">
            <p>Alexandre Dumas </p>
            <div className="img-user"></div>
          </div>
        </div>
        <div className="content-notation">
          <div className="tags">
            <Tag placeholder="Cozy" />
            <Tag placeholder="Canal" />
            <Tag placeholder="Paris 10" />
          </div>
          <div className="stars">
            <Rating />
          </div>
        </div>
        <div className="fiche-dropdown">
          <Dropdown className="dropdown-logement" placeholder="Description" />
          <Dropdown placeholder="Équipements" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default FicheLogement;
