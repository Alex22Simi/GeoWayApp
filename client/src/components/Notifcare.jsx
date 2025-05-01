import "./Notificare.css";

const Notificare = ({ mesaj, status }) => {
  console.log(status);
  return (
    <div id="notif" className={status}>
      {mesaj}
    </div>
  );
};

export default Notificare;
