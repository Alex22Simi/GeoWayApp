import PunctajHarti from "./PunctajHarti";

const judete = [
  { id: 1, nume: "Alba" },
  { id: 2, nume: "Argeș" },
  { id: 3, nume: "Arad" },
  { id: 4, nume: "Municipiul București" },
  { id: 5, nume: "Bacău" },
  { id: 6, nume: "Bihor" },
  { id: 7, nume: "Bistrița-Năsăud" },
  { id: 8, nume: "Brăila" },
  { id: 9, nume: "Botoșani" },
  { id: 10, nume: "Brașov" },
  { id: 11, nume: "Buzău" },
  { id: 12, nume: "Cluj" },
  { id: 13, nume: "Călărași" },
  { id: 14, nume: "Caraș-Severin" },
  { id: 15, nume: "Constanța" },
  { id: 16, nume: "Covasna" },
  { id: 17, nume: "Dâmbovița" },
  { id: 18, nume: "Dolj" },
  { id: 19, nume: "Gorj" },
  { id: 20, nume: "Galați" },
  { id: 21, nume: "Giurgiu" },
  { id: 22, nume: "Hunedoara" },
  { id: 23, nume: "Harghita" },
  { id: 24, nume: "Ilfov" },
  { id: 25, nume: "Ialomița" },
  { id: 26, nume: "Iași" },
  { id: 27, nume: "Mehedinți" },
  { id: 28, nume: "Maramureș" },
  { id: 29, nume: "Mureș" },
  { id: 30, nume: "Neamț" },
  { id: 31, nume: "Olt" },
  { id: 32, nume: "Prahova" },
  { id: 33, nume: "Sibiu" },
  { id: 34, nume: "Sălaj" },
  { id: 35, nume: "Satu Mare" },
  { id: 36, nume: "Suceava" },
  { id: 37, nume: "Tulcea" },
  { id: 38, nume: "Timiș" },
  { id: 39, nume: "Teleorman" },
  { id: 40, nume: "Vâlcea" },
  { id: 41, nume: "Vrancea" },
  { id: 42, nume: "Vaslui" },
];

const JudeteRomania = () => {
  return (
    <PunctajHarti
      obiecte={judete}
      numeObiecte={"judete"}
      numeHarta={"judete-romania"}
    />
  );
};

export default JudeteRomania;
