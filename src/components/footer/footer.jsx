import { Link } from "react-router-dom";
import "./footer.css";

const footer = () => {
  return (
    <div className="footerGlobal">
      <img
        className="logoFooter"
        src="img/logo.jpeg"
        alt="logoManosMundoError"
      />

      <p className="footerText">© 2024 Edwin Alexander Ospina Penna</p>

      <Link to="https://www.facebook.com/Feralex_3109/">
        <img className="imgFooter" src="img/Fb.png" alt="iraFacebook" />
      </Link>

      <Link to="https://www.instagram.com/Feralex_3109/?hl=es-la">
        <img className="imgFooter" src="img/In.png" alt="iraInstagram" />
      </Link>

      <Link to="https://web.whatsapp.com//">
        <img className="imgFooter" src="img/Gh.png" alt="iraWhatsapp" />
      </Link>
    </div>
  );
};

export default footer;
