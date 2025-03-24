import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css"; // Importamos los estilos

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
        <h2 className="header-logo">Mi tienda</h2>
        <button
          className="header-button__toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/perfume"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Perfume
          </NavLink>
          <NavLink
            to="/maquillaje"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Maquillaje
          </NavLink>
          <NavLink
            to="/cabello"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Cabello
          </NavLink>
        </nav>
    </header>
  );
}
