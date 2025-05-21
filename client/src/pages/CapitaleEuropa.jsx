import PunctajHarti from "./PunctajHarti";

const capitale = [
  { id: "008", nume: "Tirana" },
  { id: "020", nume: "Andorra La Vella" },
  { id: "040", nume: "Viena" },
  { id: "056", nume: "Bruxelles" },
  { id: "070", nume: "Sarajevo" },
  { id: 100, nume: "Sofia" },
  { id: 112, nume: "Minsk" },
  { id: 191, nume: "Zagreb" },
  { id: 196, nume: "Nicosia" },
  { id: 203, nume: "Praga" },
  { id: 208, nume: "Copenhaga" },
  { id: 233, nume: "Tallinn" },
  { id: 246, nume: "Helsinki" },
  { id: 250, nume: "Paris" },
  { id: 276, nume: "Berlin" },
  { id: 300, nume: "Atena" },
  { id: 336, nume: "Vatican" },
  { id: 348, nume: "Budapesta" },
  { id: 352, nume: "Reykjavik" },
  { id: 372, nume: "Dublin" },
  { id: 380, nume: "Roma" },
  { id: 428, nume: "Riga" },
  { id: 438, nume: "Vaduz" },
  { id: 440, nume: "Vilnius" },
  { id: 442, nume: "Luxemburg" },
  { id: 470, nume: "Valletta" },
  { id: 492, nume: "Monaco" },
  { id: 498, nume: "Chișinău" },
  { id: 499, nume: "Podgorica" },
  { id: 528, nume: "Amsterdam" },
  { id: 578, nume: "Oslo" },
  { id: 616, nume: "Varșovia" },
  { id: 620, nume: "Lisabona" },
  { id: 642, nume: "București" },
  { id: 643, nume: "Moscova" },
  { id: 674, nume: "San Marino" },
  { id: 688, nume: "Belgrad" },
  { id: 703, nume: "Bratislava" },
  { id: 705, nume: "Ljubljana" },
  { id: 724, nume: "Madrid" },
  { id: 752, nume: "Stockholm" },
  { id: 756, nume: "Berna" },
  { id: 792, nume: "Ankara" },
  { id: 804, nume: "Kiev" },
  { id: 807, nume: "Skopje" },
  { id: 826, nume: "Londra" },
];

const CapitaleEuropa = () => {
  return (
    <PunctajHarti
      obiecte={capitale}
      numeObiecte={"capitale europene"}
      numeHarta={"capitale-europa"}
      numeObiect={'capitala'}
      substantivFeminin={true}
    />
  );
};

export default CapitaleEuropa;
