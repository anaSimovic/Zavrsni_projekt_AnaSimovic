import { Link } from "react-router-dom";
import logo from "../Components/logo.png";
import Aktivnosti from "./Aktivnosti";
import Mapa from "./Mapa";
import Footer from "./Footer";
import Tekst from "./Text";
export default function Main() {
  return (
    <div className="App">
      <div className="header">
        <nav>
          <span>
            <img src={logo} className="logo" />
            <Link to="/">Zelena Oaza</Link>
          </span>
          <ul>
            <li>
              <Link to="/AboutUs">O nama</Link>
            </li>
            <li>
              <Link to="/Prijava">Prijava</Link>
            </li>
          </ul>
        </nav>
        <h1> Otkrijte Hrvatsku. </h1>
        <h3> Udahnite svoju zemlju. </h3>
        <a href="#vise" className="cta-button">
          Saznajte više
          <svg
            width="80"
            height="30"
            viewBox="20 10 110 70"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="70"
              y1="30"
              x2="90"
              y2="50"
              stroke="white"
              stroke-width="3"
            />
            <line
              x1="70"
              y1="70"
              x2="90"
              y2="50"
              stroke="white"
              stroke-width="3"
            />
          </svg>
        </a>
      </div>
      <Tekst />
      <Aktivnosti />
      <Mapa />
      <Footer />
    </div>
  );
}
