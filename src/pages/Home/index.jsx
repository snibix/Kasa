import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Cards from "../../components/Cards";
import data from "../../data/data.json";

import bg from "../../assets/images/img-home.png";
import { useState } from "react";

function Home() {
  const [logements] = useState(data);

  if (!logements || !Array.isArray(logements)) {
    return <p>Chargement des données...</p>;
  }

  return (
    <div className="App">
      <div className="content">
        <Header />
        <Banner
          imgBanner={[bg]}
          withGradient={true}
          content={"Chez vous, partout et ailleurs"}
        />
        <Cards logements={logements} />{" "}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
