import { Link } from "react-router-dom";
import CarWidget from "./carWidget";
import "./navBar.css";

const navBar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-black" data-bs-theme="light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {" "}
          <img
            className="logo"
            src="img/logo.jpeg"
            alt="Cinco noches en freddy's"
          />
        </Link>

        <button
          className="navbar-toggler bg-primary "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active link-light"
                aria-current="page"
                to="/productos"
              >
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active link-light"
                aria-current="page"
                to="/categoria/funko"
              >
                Categoría Funkos
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link link-light" to="/categoria/Set">
                Conjuntos de categorías
              </Link>
            </li>
          </ul>
        </div>
        <CarWidget />
      </div>
    </nav>
  );
};

export default navBar;
