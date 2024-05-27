import Hrv from "../Components/hrv.png";

export default function Tekst() {
  return (
    <div className="App">
      <div className="containerText">
        <p id="vise">
          <hr className="prviHr"></hr>
          Dobrodošli u Zelenu Oazu, vaše idealno odredište za kampiranje u srcu
          Hrvatske. Naša predivna priroda, netaknute plaže i kristalno čisto
          more pružit će vam nezaboravno iskustvo. Bilo da ste avanturist u
          potrazi za novim izazovima ili jednostavno želite opuštanje u mirnom
          okruženju, naš kamp nudi nešto za svakoga. Uživajte u brojnim
          aktivnostima na otvorenom, od planinarenja i biciklizma do ronjenja i
          jedrenja, sve uz ljepotu hrvatskog krajolika.
        </p>
        <hr></hr>
        <div className="hrvatska">
          <div className="slika">
            <img src={Hrv} />
          </div>
          <div className="opisHr">
            <p>
              Hrvatska je zemlja bogate povijesti, spektakularne prirode i
              gostoljubivih ljudi. Smještena na raskrižju Srednje Europe,
              Balkana i Mediterana, Hrvatska se može pohvaliti raznolikim
              krajolikom koji uključuje predivne obale Jadranskog mora,
              slikovite planine i prostrane šume. Sa više od tisuću otoka i
              otočića, Hrvatska je prava oaza za ljubitelje mora i prirode.
            </p>
            <br />
            <p>
              Povijest Hrvatske seže duboko u prošlost, s tragovima ljudskog
              naseljavanja još od paleolitika. Gradovi poput Dubrovnika, Splita
              i Zadra očaravaju svojom arhitekturom i povijesnim znamenitostima
              koje svjedoče o bogatoj kulturnoj baštini. Dubrovnik, poznat i kao
              "Biser Jadrana", oduševljava svojim impresivnim gradskim zidinama
              koje su uvrštene na UNESCO-v popis svjetske baštine. Split, s
              Dioklecijanovom palačom, također na UNESCO-voj listi, nudi
              fascinantan uvid u rimsku povijest i kulturu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
