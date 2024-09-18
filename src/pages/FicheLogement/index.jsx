import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";

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
        <div className="content-name">
          <div className="fiche-title">
            <h3>Cozy loft on the Canal Saint-Martin</h3>
            <p>Paris, île-de-France</p>
          </div>
          <div>
            <p>Name </p>
            <img></img>
          </div>
        </div>
        <div>{/* Tag + note étoiles */}</div>
        <div className="fiche-dropdown">
          <Dropdown className="dropdown-logement" />
          <Dropdown />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default FicheLogement;
