import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import bg from "../../assets/images/img-home.png";
import "../../style/Header.css";
import "../../style/Footer.css";

function Home() {
  return (
    <div className="App">
      <div className="content">
        <div className="header">
          <Header />
        </div>
        <Banner
          imgBanner={bg}
          withGradient={true}
          content={"Chez vous, partout et ailleurs"}
        />

        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
