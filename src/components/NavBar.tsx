import "./NavBar.css";
import LogoColor from "../assets/logo-color.svg";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <img src={LogoColor} alt="Universo Fono" />
        <li className="navbar-item">NOSOTROS</li>
        <li className="navbar-item">ACTIVIDADES</li>
        <li className="navbar-item">COMUNIDAD</li>
        <li className="navbar-item">TERAPIA</li>
        <li className="navbar-item">CONTACTO</li>
        <button className="navbar-button">ÚNETE</button>
      </ul>
    </nav>
  );
};

export default NavBar;
