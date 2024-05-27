import logo from "../Components/logo.png";
import Face from "./facebook-3-48.png";
import Yt from "./yt.png";
import Insta from "./insta.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="prvi">
        <div className="info">
          <span>
            {" "}
            <img src={logo} className="logoFooter" /> Zelena Oaza
          </span>
          <p>
            Dobrodošli u Zelenu Oazu - gdje se svaka avantura pretvara u
            nezaboravnu priču!
          </p>
        </div>
        <div className="kontakt">
          <p>Kontaktirajte nas! </p>
          <a href="https://www.facebook.com/CampingInCroatia/?ref=embed_page">
            <img src={Face} />
          </a>
          <a href="https://www.instagram.com/campingincroatia/">
            <img src={Insta} />
          </a>
          <a href="https://www.youtube.com/c/campinghr">
            <img src={Yt} />
          </a>
        </div>
      </div>

      <div className="dno">
        <p>Copyright© 2024. Sva prava su pridržana. Ana Šimović</p>
      </div>
    </div>
  );
}
