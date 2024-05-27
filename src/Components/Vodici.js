import AboutUs from "./AboutUs";

export default function VodiciProps() {
  const Vodic = {
    Ime1: "Marija Brčić",
    Podrucje1: "Vodič za planinarenje",
    Opis1:
      "“Zovem se Marija Brčić i ponosna sam što sam najistaknutiji vodič za planinarenje u našoj kompaniji. Odrasla sam u malom planinskom selu, gdje sam već kao dijete razvila strast prema prirodi i planinarenju. S godinama, ta strast se pretvorila u životni poziv. S 12 godina iskustva u vođenju planinarskih tura, stekla sam duboko razumijevanje naših predivnih planina i staza.”",
    Ime2: "Antonio Horvat",
    Podrucje2: "Vodič za jedrenje",
    Opis2:
      "“Zovem se Antonio Horvat i ponosno vam predstavljam sebe kao vašeg vodiča za jedrenje s deset godina iskustva na moru. Rođen sam i odrastao uz obalu, gdje sam od ranih dana razvio strast prema moru i jedrenju. Moje putovanje u svijet jedrenja počelo je kao hobi, ali ubrzo se pretvorilo u profesionalnu karijeru.”",
    Ime3: "Matilda Kukić",
    Podrucje3: "Vodič za biciklizam",
    Opis3:
      "“Zovem se Matilda Kukić i specijalizirala sam se za ekstremni biciklizam, no s jednakim užitkom vodim i grupe po jednostavnijim stazama.S dugogodišnjim iskustvom na najzahtjevnijim stazama, stekla sam vještine i znanje koje mi omogućavaju da pružim nezaboravna iskustva svim biciklistima, bez obzira na njihovu razinu spretnosti.”",
    Ime4: "Ivan Filipović",
    Podrucje4: "Vodič za ronjenje",
    Opis4:
      "“Zovem se Ivan Filipović i profesionalni sam ronilac s velikom strašću za otkrivanjem ljepota hrvatskih morskih dna. Odrastao sam uz Jadransko more, gdje sam od malih nogu razvijao ljubav prema ronjenju i podvodnom svijetu. Danas, s višegodišnjim iskustvom, moj cilj je podijeliti tu strast s vama i voditi vas kroz nezaboravne ronilačke avanture.”",
  };

  return (
    <div className="App">
      <AboutUs props={Vodic} />
    </div>
  );
}
