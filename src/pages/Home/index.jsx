import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import bg from "../../assets/images/img-home.png";
import "../../style/Home.css";
import "../../style/Footer.css";

function Home() {
  return (
    <div className="App">
      <header className="header">
        <Header />
        <div className="banner">
          <Banner
            imgBanner={bg}
            withGradient={true}
            content={"Chez vous, partout et ailleurs"}
          />
        </div>
      </header>

      <Card />

      <Footer />
    </div>
  );
}

export default Home;
