import PunctajHarti from "./PunctajHarti";

const unitatiRelief = [
  { id: 1, nume: "Câmpia Română" },
  { id: 2, nume: "Podișul/Piemontul Getic" },
  { id: 3, nume: "Podișul Moldovei" },
  { id: 4, nume: "Subcarpații" },
  { id: 5, nume: "Podișul Dobrogei" },
  { id: 7, nume: "Delta Dunării" },
  { id: 8, nume: "Podișul Mehedinți" },
  { id: 9, nume: "Carpații Meridionali" },
  { id: 10, nume: "Câmpia de Vest" },
  { id: 11, nume: "Carpații Orientali" },
  { id: 12, nume: "Dealurile de Vest" },
  { id: 13, nume: "Podișul Transilvaniei" },
  { id: 14, nume: "Carpații Occidentali" },
];

const UnitariRelief = () => {
  return (
    <PunctajHarti
      obiecte={unitatiRelief}
      numeObiecte={"unitatile de relief"}
      numeHarta={"unitati-relief"}
      numeObiect={"unitatea"}
      substantivFeminin={true}
    />
  );
};

export default UnitariRelief;
