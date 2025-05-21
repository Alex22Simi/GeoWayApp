import PunctajHarti from "./PunctajHarti";

const tariEuropa = [
  { id: "008", nume: "Albania" },
  { id: "020", nume: "Andorra" },
  { id: "040", nume: "Austria" },
  { id: "056", nume: "Belgia" },
  { id: "070", nume: "Bosnia și Herțegovina" },
  { id: 100, nume: "Bulgaria" },
  { id: 112, nume: "Belarus" },
  { id: 191, nume: "Croația" },
  { id: 196, nume: "Cipru" },
  { id: 203, nume: "Cehia" },
  { id: 208, nume: "Danemarca" },
  { id: 233, nume: "Estonia" },
  { id: 246, nume: "Finlanda" },
  { id: 250, nume: "Franța" },
  { id: 276, nume: "Germania" },
  { id: 300, nume: "Grecia" },
  { id: 336, nume: "Vatican" },
  { id: 348, nume: "Ungaria" },
  { id: 352, nume: "Islanda" },
  { id: 372, nume: "Irlanda" },
  { id: 380, nume: "Italia" },
  { id: 428, nume: "Letonia" },
  { id: 438, nume: "Liechtenstein" },
  { id: 442, nume: "Luxemburg" },
  { id: 440, nume: "Lituania" },
  { id: 470, nume: "Malta" },
  { id: 492, nume: "Monaco" },
  { id: 498, nume: "Republica Moldova" },
  { id: 499, nume: "Muntenegru" },
  { id: 528, nume: "Olanda" },
  { id: 578, nume: "Norvegia" },
  { id: 616, nume: "Polonia" },
  { id: 620, nume: "Portugalia" },
  { id: 642, nume: "România" },
  { id: 643, nume: "Rusia" },
  { id: 674, nume: "San Marino" },
  { id: 688, nume: "Serbia" },
  { id: 703, nume: "Slovacia" },
  { id: 705, nume: "Slovenia" },
  { id: 724, nume: "Spania" },
  { id: 752, nume: "Suedia" },
  { id: 756, nume: "Elvetia" },
  { id: 792, nume: "Turcia" },
  { id: 804, nume: "Ucraina" },
  { id: 807, nume: "Macedonia de Nord" },
  { id: 826, nume: "Regatul Unit" },
];

const TariEuropa = () => {
  return (
    <PunctajHarti
      obiecte={tariEuropa}
      numeObiecte={"tari europene"}
      numeHarta={"tari-europa"}
      numeObiect={'țara'}
      substantivFeminin={true}
    />
  );
};

export default TariEuropa;
