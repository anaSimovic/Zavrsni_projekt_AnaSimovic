import Planina from "./planina.png";
import Brod from "./brod2.png";
import Bicikla from "./bike.png";
import Maska from "./ronj.png";
import Risnjak from "./risnjak.jpg";
import Draga from "./draga.jpg";
import Rizvan from "./rizvan.jpg";
import Orbis from "./orbis.jpg";
import Jedrenje from "./jedrenje.jpg";
import Kozarica from "./kozarica.jpg";
import Pineta from "./pineta.jpg";
import Soline from "./soline.jpg";
import Bicikliranje from "./bike.jpg";
import Skradine from "./skradine.jpeg";
import Marina from "./marina.jpg";
import Korana from "./korana.jpg";
import Ronj from "./ronjenje.jpg";
import Marino from "./marino.jpg";
import Bun from "./bun.jpg";
import Baska from "./baska.jpg";

import React, { useState } from "react";
export default function Aktivnosti() {
  const [clickedActivity, setClickedActivity] = useState(null);
  const handleClick = (activity) => {
    setClickedActivity(activity);
  };
  return (
    <div className="App">
      <div className="containerText">
        <h2 className="aktivnostih2">Aktivnosti koje nudimo </h2>
        <div className="aktivnosti">
          <img
            src={Planina}
            alt="Planina"
            onClick={() => handleClick("planina")}
          />
          <img src={Brod} alt="Brod" onClick={() => handleClick("brod")} />
          <img
            src={Bicikla}
            alt="Bicikla"
            onClick={() => handleClick("bicikla")}
          />
          <img src={Maska} alt="Maska" onClick={() => handleClick("maska")} />
        </div>
        {clickedActivity && (
          <div className="activity-description">
            {clickedActivity === "planina" && (
              <div>
                <h3>
                  Uživajte u planinarenju i istraživanju prekrasnih planinskih
                  staza.
                </h3>
                <div className="AktivnostiOpis">
                  <div className="slikaAktivnosti">
                    <img src={Risnjak} />
                  </div>
                  <div className="AktivnostiTekst">
                    <p>
                      Planinarenje u Hrvatskoj nudi jedinstvenu priliku za
                      istraživanje raznolike prirode i spektakularnih krajolika.
                      Naša ponuda aktivnosti planinarenja omogućava vam da
                      otkrijete skrivene ljepote hrvatskih planina, od
                      veličanstvenih vrhova Velebita do slikovitih staza u
                      Nacionalnom parku Risnjak.
                      <br />
                      Bez obzira jeste li iskusni planinar ili početnik, naši
                      vodiči osigurat će da svaka tura bude sigurna i
                      prilagođena vašim sposobnostima. Kroz naše planinarske
                      ture, moći ćete uživati u netaknutoj prirodi, čistom zraku
                      i zadivljujućim pogledima na Jadransko more i okolne
                      otoke. Iskusite nezaboravne avanture, naučite o lokalnoj
                      flori i fauni te provedite vrijeme u opuštajućem okruženju
                      daleko od gradske vreve. Pridružite nam se i doživite
                      planinarenje u Hrvatskoj kao nikada prije!
                    </p>
                  </div>
                </div>
                <div className="Rekom">
                  <h3>Predlažemo ove kampove za odabranu aktivnost: </h3>
                  <div className="primjeriRekom">
                    <div className="primjer">
                      <img src={Draga} />
                      <h4>Kamp Draga </h4>
                      <p>Nacionalni parkovi u blizini:</p>
                      <ul>
                        <li> NP Risnjak 74KM</li>
                        <li>PP Učka 15KM </li>
                      </ul>
                      <br />
                      <br />
                      <a href="https://www.campinginparks.eu/en/camp/camp-draga/4">
                        Istraži više...
                      </a>
                    </div>

                    <div className="primjer">
                      <img src={Orbis} />
                      <h4>Kamp Medora Orbis </h4>
                      <p>Nacionalni parkovi u blizini:</p>
                      <ul>
                        <li> PP Biokovo 6.8KM</li>
                      </ul>
                      <br />
                      <br />
                      <a href="https://www.campinginparks.eu/en/camp/camp-medora-orbis/11">
                        Istraži više...
                      </a>
                    </div>

                    <div className="primjer">
                      <img src={Rizvan} />
                      <h4>Kamp Rizvan city </h4>
                      <p>Nacionalni parkovi u blizini:</p>
                      <ul>
                        <li> NP Velebit 0KM</li>
                      </ul>
                      <br />
                      <br />
                      <a href="https://www.campinginparks.eu/en/camp/camp-rizvan-city/16">
                        Istraži više...
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {clickedActivity === "brod" && (
              <div>
                <h3>Otkrijte ljepote Jadranskog mora vozeći se brodom.</h3>
                <div className="AktivnostiOpis">
                  <div className="slikaAktivnosti">
                    <img src={Jedrenje} />
                  </div>
                  <div className="AktivnostiTekst">
                    <p>
                      Jedrenje u Hrvatskoj pruža jedinstvenu priliku za
                      istraživanje prekrasnih obala Jadranskog mora, poznatih po
                      kristalno čistoj vodi, tisućama otoka i slikovitim
                      priobalnim gradovima. Naša ponuda jedrenja omogućuje vam
                      da doživite autentičnu ljepotu hrvatske obale, bilo da ste
                      iskusni jedriličar ili potpuni početnik.
                      <br />
                      Uz naše stručne vodiče, moći ćete ploviti između
                      povijesnih gradova poput Dubrovnika i Splita, uživati u
                      mirnim uvalama i otkriti skrivene plaže koje su dostupne
                      samo morskim putem. Naša flota modernih jedrilica i
                      katamarana osigurava udobnost i sigurnost, dok vi
                      istražujete bogatu kulturnu baštinu, ukusnu mediteransku
                      kuhinju i gostoljubivost lokalnog stanovništva. Pridružite
                      nam se na nezaboravnoj avanturi jedrenja i stvorite
                      uspomene koje ćete zauvijek nositi sa sobom.
                    </p>
                  </div>
                </div>
                <div className="Rekom">
                  <h3>Predlažemo ove kampove za odabranu aktivnost: </h3>
                  <div className="primjeriRekom">
                    <div className="primjer">
                      <img src={Kozarica} />
                      <h4>Kamp Kozarica </h4>
                      <p>Nacionalni parkovi u blizini:</p>
                      <ul>
                        <li> NP Kornati 20KM</li>
                        <li>PP Telešćica 30KM </li>
                      </ul>
                      <br />
                      <br />
                      <a href="https://www.campinginparks.eu/en/camp/camp-kozarica/6">
                        Istraži više...
                      </a>
                    </div>

                    <div className="primjer">
                      <img src={Pineta} />
                      <h4>Kamp Pineta </h4>
                      <p>Nacionalni parkovi u blizini:</p>
                      <ul>
                        <li> NP Brijuni 2KM</li>
                      </ul>
                      <br />
                      <br />
                      <a href="https://www.campinginparks.eu/en/camp/camp-pineta/14">
                        Istraži više...
                      </a>
                    </div>

                    <div className="primjer">
                      <img src={Soline} />
                      <h4>Kamp Soline </h4>
                      <p>Nacionalni parkovi u blizini:</p>
                      <ul>
                        <li> PP Vransko jezero 5KM</li>
                        <li> NP Kortnati 10KM </li>
                      </ul>
                      <br />
                      <br />
                      <a href="https://www.campinginparks.eu/en/camp/camp-park-soline/13">
                        Istraži više...
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {clickedActivity === "bicikla" && (
              <div>
                <h3>
                  Istražite okolinu vozeći se biciklom kroz slikovite krajeve.
                </h3>
                <div className="AktivnostiOpis">
                  <div className="slikaAktivnosti">
                    <img src={Bicikliranje} />
                  </div>
                  <div className="AktivnostiTekst">
                    <p>
                      Bicikliranje u Hrvatskoj nudi nevjerojatnu priliku za
                      istraživanje raznolike prirode, kulturne baštine i
                      slikovitih krajolika. Naša ponuda biciklističkih tura
                      omogućuje vam da otkrijete najbolje što Hrvatska nudi,
                      bilo da se vozite kroz vinograde Istre, uz obalu Dalmacije
                      ili kroz planinske staze Gorskog kotara.
                      <br />
                      Svaka tura prilagođena je različitim razinama iskustva, od
                      opuštenih vožnji uz more do zahtjevnijih planinskih
                      uspona. Naši iskusni vodiči osigurat će da svaki izlet
                      bude siguran i nezaboravan, pružajući vam lokalne uvide i
                      zanimljive informacije o mjestima koja posjećujete. Uz
                      vrhunsku opremu i podršku, moći ćete uživati u čistom
                      zraku, prirodnim ljepotama i autentičnoj atmosferi
                      hrvatskih sela i gradova. Pridružite nam se na
                      biciklističkoj avanturi i doživite Hrvatsku na potpuno nov
                      način, kreirajući uspomene koje ćete dugo pamtiti.
                    </p>
                  </div>
                </div>
                <div className="Rekom">
                  <h3>Predlažemo ove kampove za odabranu aktivnost: </h3>
                  <div className="primjeriRekom">
                    <div className="primjer">
                      <img src={Skradine} />
                      <h4>Kamp Skradinske delicije </h4>
                      <p>Nacionalni parkovi u blizini:</p>
                      <ul>
                        <li> NP Krka 0.5KM</li>
                      </ul>
                      <br />
                      <br />
                      <a href="https://www.campinginparks.eu/en/camp/camp-skradinske-delicije/18">
                        Istraži više...
                      </a>
                    </div>

                    <div className="primjer">
                      <img src={Marina} />
                      <h4>Kamp Marina </h4>
                      <p>Nacionalni parkovi u blizini:</p>
                      <ul>
                        <li> NP Krka 2.5KM</li>
                      </ul>
                      <br />
                      <br />
                      <a href="https://www.campinginparks.eu/en/camp/camp-marina/10">
                        Istraži više...
                      </a>
                    </div>

                    <div className="primjer">
                      <img src={Korana} />
                      <h4>Kamp Korana </h4>
                      <p>Nacionalni parkovi u blizini:</p>
                      <ul>
                        <li> NP Plitvice 6KM </li>
                      </ul>
                      <br />
                      <br />
                      <a href="https://www.campinginparks.eu/en/camp/camp-korana/19">
                        Istraži više...
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {clickedActivity === "maska" && (
              <div>
                <h3>Uživajte u ronjenju i istraživanju podvodnog svijeta.</h3>
                <div className="AktivnostiOpis">
                  <div className="slikaAktivnosti">
                    <img src={Ronj} />
                  </div>
                  <div className="AktivnostiTekst">
                    <p>
                      Ronjenje u Hrvatskoj pruža jedinstvenu priliku za
                      istraživanje bogatog podvodnog svijeta Jadranskog mora,
                      koje je poznato po svojoj izuzetnoj čistoći i
                      bioraznolikosti. Naša ponuda ronilačkih tura omogućuje vam
                      da zaronite u kristalno čisto more i otkrijete fascinantne
                      podvodne pejzaže, bogate koraljnim grebenima, šarolikim
                      ribljim životom, te povijesnim olupinama brodova koje
                      pričaju priče iz prošlosti.
                      <br /> Bez obzira jeste li iskusni ronioc ili početnik,
                      naši certificirani instruktori osigurat će vam sigurno i
                      nezaboravno iskustvo, pružajući vam obuku i podršku
                      prilagođenu vašoj razini vještine. Ronite u Nacionalnom
                      parku Kornati, istražite podvodne spilje otoka Vis ili
                      otkrijte tajne potonulog broda Baron Gautsch. Uz vrhunsku
                      opremu i stručnost naših vodiča, doživjet ćete
                      nevjerojatne avanture i stvoriti uspomene koje ćete
                      zauvijek nositi sa sobom. Pridružite nam se u otkrivanju
                      podvodnih čuda Hrvatske i doživite nezaboravne trenutke u
                      jednom od najljepših mora na svijetu.
                    </p>
                  </div>
                </div>
                <div className="Rekom">
                  <h3>Predlažemo ove kampove za odabranu aktivnost: </h3>
                  <div className="primjeriRekom">
                    <div className="primjer">
                      <img src={Marino} />
                      <h4>Kamp San Marino </h4>

                      <br />
                      <br />
                      <a href="https://www.camping-adriatic.com/hr/san-marino-kamp-rab/sadrzaji-usluge">
                        Istraži više...
                      </a>
                    </div>

                    <div className="primjer">
                      <img src={Bun} />
                      <h4>Kamp Bunculuka </h4>

                      <br />
                      <br />
                      <a href="https://www.camping-adriatic.com/hr/bunculuka-naturisticki-kamp-baska?utm_source=google&utm_medium=cpc&utm_campaign=|HR|-Camping_Brand_Search-[TY:G_Brand_Search;Lng:HR;Bid:tROAS]&utm_content=Bunculuka_Camping_Resort-(Tg:exact)-Lng:hr-[Typ:Brand;Pha:Decision;Des:Baska;Obj:Bunculuka;]-VH&gad_source=1&gclid=Cj0KCQjwu8uyBhC6ARIsAKwBGpQqOdXmAkV6wMFNFqIZO7iQAmJwZ5Z_uQ0QFPuGo6aKbqsxfAUapIwaAqo7EALw_wcB">
                        Istraži više...
                      </a>
                    </div>

                    <div className="primjer">
                      <img src={Baska} />
                      <h4>Kamp Baška Beach </h4>

                      <br />
                      <br />
                      <a href="https://www.camping-adriatic.com/hr/zablace-kamp-baska/sport-zabava">
                        Istraži više...
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
