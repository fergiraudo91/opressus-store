import React from "react";
import brand from "../assets/images/brand.png";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img src={brand} width="30" height="30" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Inicio <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Vinos
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Cervezas
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Rubias
              </a>
              <a className="dropdown-item" href="#">
                Rojas
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Negras
              </a>
            </div>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">
            Packs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Espirituosas
          </a>
        </li>
        </ul>
      </div>
    </nav>
  );
};
