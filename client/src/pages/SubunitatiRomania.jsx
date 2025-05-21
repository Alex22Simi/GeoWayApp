import PunctajHarti from "./PunctajHarti";

const unitatiRelief = [
  { id: 1, nume: "Câmpia Olteniei" },
  { id: 2, nume: "Câmpia Buzău-Siret" },
  { id: 3, nume: "Lunca Dunării" },
  { id: 4, nume: "Podișul/Piemontul Getic" },
  { id: 5, nume: "Câmpia Ialomiței/Munteniei Centrale" },
  { id: 6, nume: "Munții Banatului" },
  { id: 7, nume: "Podișul Târnavelor" },
  { id: 8, nume: "Munții Apuseni" },
  { id: 9, nume: "Podișul Bârladului" },
  { id: 10, nume: "Podișul Sucevei" },
  { id: 11, nume: "Câmpia Moldovei/Jijiei" },
  { id: 12, nume: "Subcarpații Getici" },
  { id: 13, nume: "Câmpia Bărăganului" },
  { id: 14, nume: "Podișul Dobrogei de Sud" },
  { id: 15, nume: "Podișul Dobrogei Centrale/ Podișul Casimcei" },
  { id: 16, nume: "Podișul Dobrogei de Nord" },
  { id: 18, nume: "Delta Dunării" },
  { id: 19, nume: "Subcarpații Moldovei" },
  { id: 20, nume: "Subcarpații Curburii" },
  { id: 21, nume: "Podișul Mehedinți" },
  { id: 22, nume: "Grupa Retezat-Godeanu" },
  { id: 23, nume: "Câmpia Banatului" },
  { id: 24, nume: "Câmpia Crișurilor" },
  { id: 25, nume: "Câmpia Someșului" },
  { id: 26, nume: "Carpații Maramureșului și Bucovinei" },
  { id: 27, nume: "Carpații Moldo-Transilvani" },
  { id: 28, nume: "Carpații Curburii" },
  { id: 29, nume: "Grupa Făgăraș" },
  { id: 30, nume: "Grupa Parâng" },
  { id: 31, nume: "Munții Poiana Ruscă" },
  { id: 32, nume: "Câmpia Teleormanului/Munteniei de Vest" },
  { id: 33, nume: "Dealurile Banatului" },
  { id: 34, nume: "Podișul Someșan" },
  { id: 35, nume: "Dealurile Crișurilor" },
  { id: 36, nume: "Grupa Bucegi" },
  { id: 37, nume: "Câmpia Transilvaniei" },
  { id: 38, nume: "Subcarpații Transilvaniei" },
  { id: 39, nume: "Dealurile Silvaniei" },
];

const SubunitatiRomania = () => {
  return (
    <PunctajHarti
      obiecte={unitatiRelief}
      numeObiecte={"subunitati"}
      numeHarta={"subunitati"}
      numeObiect={"subunitatea"}
      substantivFeminin={true}
    />
  );
};

export default SubunitatiRomania;
