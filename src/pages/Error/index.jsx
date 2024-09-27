import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "../../style/Error.css";
import "../../style/Header.css";

function Error() {
  return (
    <div className="App">
      <div className="content">
        <Header />

        <div className="main">
          <p className="error-message">404</p>

          <p className="message-oups">
            Oups! La page que vous demandez n'existe pas.
          </p>

          <Link to="/" className="back">
            Retourner sur la page d'accueil
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
