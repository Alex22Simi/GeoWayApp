import PunctajHarti from "./PunctajHarti";

const rauri = [
  { id: 1, nume: "Râul Siret" },
  { id: 2, nume: "Râul Prut" },
  { id: 3, nume: "Dunărea" },
  { id: 4, nume: "Râul Someș" },
  { id: 5, nume: "Râul Tisa" },
  { id: 6, nume: "Râul Mureș" },
  { id: 7, nume: "Râul Olt" },
  { id: 8, nume: "Râul Someșul Mic" },
  { id: 9, nume: "Râul Someșul Mare" },
  { id: 10, nume: "Râul Cerna" },
  { id: 11, nume: "Canalul Dunăre-Marea Neagră" },
  { id: 12, nume: "Râul Timiș" },
  { id: 13, nume: "Râul Jiu" },
  { id: 14, nume: "Râul  Motru" },
  { id: 15, nume: "Râul Argeș" },
  { id: 16, nume: "Râul Dâmbovița" },
  { id: 17, nume: "Râul Ialomița" },
  { id: 18, nume: "Râul Moldova" },
  { id: 19, nume: "Râul Trotuș" },
  { id: 20, nume: "Râul Barcău" },
  { id: 21, nume: "Râul Prahova" },
  { id: 26, nume: "Râul Crișul Repede" },
  { id: 27, nume: "Râul Crișul Alb" },
  { id: 28, nume: "Râul Crișul Negru" },
  { id: 30, nume: "Râul Târnava Mare" },
  { id: 31, nume: "Râul Târnava Mică" },
  { id: 32, nume: "Râul Bega" },
  { id: 37, nume: "Râul Cibin" },
  { id: 38, nume: "Râul Lotru" },
  { id: 39, nume: "Râul Teleorman" },
  { id: 40, nume: "Râul Vedea" },
  { id: 41, nume: "Râul Călmățui" },
  { id: 42, nume: "Râul Buzău" },
  { id: 43, nume: "Râul Jijia" },
  { id: 44, nume: "Râul Bahlui" },
  { id: 45, nume: "Râul Bârlad" },
  { id: 46, nume: "Râul Bistrița" },
  { id: 47, nume: "Râul Suceava" },
  { id: 52, nume: "Canalul Poarta Albă-Novădari" },
  { id: 57, nume: "Brațul Chilia" },
  { id: 58, nume: "Brațul Sulina" },
  { id: 59, nume: "Brațul Sfântu Gheorghe" },
];

const Rauri = () => {
  return (
    <PunctajHarti
      obiecte={rauri}
      numeObiecte={"rauri"}
      numeHarta={"rauri-romania"}
      // numeObiect={"raul"}
    />
  );
};

export default Rauri;
