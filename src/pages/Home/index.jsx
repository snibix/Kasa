import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import "../../style/Home.css";
import "../../style/Footer.css";

function Home() {
  return (
    <div className="App">
      <header className="header">
        <Header />
        <div className="banner">
          <Banner />
        </div>
      </header>
      <Card />

      <Footer />
    </div>
  );
}

export default Home;
