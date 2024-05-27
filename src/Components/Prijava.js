import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../Components/logo.png";
import Footer from "./Footer";

class Prijavaform extends Component {
  state = {
    ime: "",
    prezime: "",
    lozinka: "",
    destinacija: "",
    datum: "",
    brojOsoba: "",
    dodatniZahtjevi: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("Prijava je potvrđena", this.state);

    this.setState({
      ime: "",
      prezime: "",
      lozinka: "",
      destinacija: "",
      datum: "",
      brojOsoba: "",
      dodatniZahtjevi: "",
    });
  };

  render() {
    return (
      <div>
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
        <div className="form-container">
          <h1 className="welcome-message">
            Započnite Vaše avanture, {this.state.ime} !
          </h1>
          <form className="form" onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Vaše Ime"
              value={this.state.ime}
              onChange={(e) => this.setState({ ime: e.target.value })}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Vaše Prezime"
              value={this.state.prezime}
              onChange={(e) => this.setState({ prezime: e.target.value })}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Vaša lozinka"
              value={this.state.lozinka}
              onChange={(e) => this.setState({ lozinka: e.target.value })}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Destinacija"
              value={this.state.destinacija}
              onChange={(e) => this.setState({ destinacija: e.target.value })}
              className="input-field"
            />
            <input
              type="date"
              placeholder="Datum"
              value={this.state.datum}
              onChange={(e) => this.setState({ datum: e.target.value })}
              className="input-field"
            />
            <input
              type="number"
              placeholder="Broj Osoba"
              value={this.state.brojOsoba}
              onChange={(e) => this.setState({ brojOsoba: e.target.value })}
              className="input-field"
            />
            <textarea
              placeholder="Dodatni Zahtjevi"
              value={this.state.dodatniZahtjevi}
              onChange={(e) =>
                this.setState({ dodatniZahtjevi: e.target.value })
              }
              className="input-field"
            ></textarea>
            <button type="submit" className="submit-button">
              Potvrdi
            </button>
          </form>
          <div className="obavijest">
            <h4>
              Ako tražite kampove izvan naših prijedloga pronađite svoj savršen
              izbor{" "}
              <a href="https://www.camping.hr/hr/hrvatski-kampovi" id="veza">
                ovdje
              </a>
              .
            </h4>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Prijavaform;
