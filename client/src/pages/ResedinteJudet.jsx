import PunctajHarti from "./PunctajHarti";

const resedinte = [
  { id: 1, nume: "Alba Iulia" },
  { id: 2, nume: "Pitești" },
  { id: 3, nume: "Arad" },
  { id: 4, nume: "Municipiul București" },
  { id: 5, nume: "Bacău" },
  { id: 6, nume: "Oradea" },
  { id: 7, nume: "Bistrița" },
  { id: 8, nume: "Brăila" },
  { id: 9, nume: "Botoșani" },
  { id: 10, nume: "Brașov" },
  { id: 11, nume: "Buzău" },
  { id: 12, nume: "Cluj-Napoca" },
  { id: 13, nume: "Călărași" },
  { id: 14, nume: "Reșița" },
  { id: 15, nume: "Constanța" },
  { id: 16, nume: "Sfântu Gheorghe" },
  { id: 17, nume: "Târgoviște" },
  { id: 18, nume: "Craiova" },
  { id: 19, nume: "Târgu Jiu" },
  { id: 20, nume: "Galați" },
  { id: 21, nume: "Giurgiu" },
  { id: 22, nume: "Deva" },
  { id: 23, nume: "Miercurea Ciuc" },
  { id: 25, nume: "Slobozia" },
  { id: 26, nume: "Iași" },
  { id: 27, nume: "Drobeta-Turnu Severin" },
  { id: 28, nume: "Baia Mare" },
  { id: 29, nume: "Târgu Mureș" },
  { id: 30, nume: "Piatra-Neamț" },
  { id: 31, nume: "Slatina" },
  { id: 32, nume: "Ploiești" },
  { id: 33, nume: "Sibiu" },
  { id: 34, nume: "Zalău" },
  { id: 35, nume: "Satu Mare" },
  { id: 36, nume: "Suceava" },
  { id: 37, nume: "Tulcea" },
  { id: 38, nume: "Timișoara" },
  { id: 39, nume: "Alexandria" },
  { id: 40, nume: "Râmnicu Vâlcea" },
  { id: 41, nume: "Focșani" },
  { id: 42, nume: "Vaslui" },
];

const ResedinteJudet = () => {
  return (
    <PunctajHarti
      obiecte={resedinte}
      numeObiecte={"resedinte"}
      numeHarta={"resedinte-judet"}
    />
  );
};

export default ResedinteJudet;
