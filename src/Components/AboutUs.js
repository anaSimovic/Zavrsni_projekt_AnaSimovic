import { Link } from "react-router-dom";
import logo from "../Components/logo.png";
import Footer from "./Footer";
import PrvaSlika from "./1.png";
import DrugaSlika from "./2.png";
import TrecaSlika from "./3.png";
import CetvrtaSlika from "./4.png";

export default function AboutUs({ props }) {
  return (
    <div className="App">
      <nav className="AboutNav">
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
      <div className="containerTextAbout">
        <h2>Upoznajte naš tim! </h2>
        <div className="onamaTekst">
          <p>
            Naš tim je plod strasti, predanosti i ljubavi prema prirodi. Nastao
            je iz želje da podijelimo svoju ljubav prema kampiranju i avanturi s
            drugima te da pružimo nezaboravna iskustva u divljini Hrvatske. Svoj
            početak pronalazimo u spontanim susretima ljubitelja prirode, gdje
            smo otkrili zajedničke strasti i snove.
            <br />
            <br />
            Naš tim se sastoji od stručnih vodiča, entuzijasta koji su duboko
            povezani s prirodom i koji dijele svoje znanje i iskustvo kako bi
            svaki kamperski doživljaj bio nezaboravan. Svaki vodič je poseban,
            sa svojim jedinstvenim setom vještina, ali svi dijele istu viziju:
            omogućiti vam da se povežete s prirodom na dublji način, osnažiti
            vas i nadahnuti da istražujete svijet oko sebe.
            <br />
            <br />
            Naš tim nije samo grupa ljudi koji vode ture; mi smo obitelj.
            Povezani smo ljubavlju prema onome što radimo i spremni smo
            podijeliti tu ljubav s vama. Budite dio naše priče, doživite ljepotu
            kampiranja s nama i stvorite nezaboravne uspomene koje će trajati
            cijeli život.
          </p>
        </div>
        <hr />
        <h3 className="predstavlja">
          Ponosno predstavljamo naše najbolje vodiče iz svakog područja
        </h3>
        <div className="vodici">
          <div className="V">
            <img src={DrugaSlika} />

            <h3> {props.Ime1} </h3>
            <h3 className="podrucje">{props.Podrucje1} </h3>
            <p className="opis"> {props.Opis1} </p>
          </div>
          <div className="V">
            <img src={PrvaSlika} />

            <h3> {props.Ime2} </h3>
            <h3 className="podrucje">{props.Podrucje2} </h3>
            <p className="opis"> {props.Opis2} </p>
          </div>
          <div className="V">
            <img src={CetvrtaSlika} />

            <h3> {props.Ime3} </h3>
            <h3 className="podrucje">{props.Podrucje3} </h3>
            <p className="opis"> {props.Opis3} </p>
          </div>
          <div className="V">
            <img src={TrecaSlika} />

            <h3> {props.Ime4} </h3>
            <h3 className="podrucje">{props.Podrucje4} </h3>
            <p className="opis"> {props.Opis4} </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
