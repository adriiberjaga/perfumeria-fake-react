import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css"; 
import cart from '../../images/image-cart.png'
import { useCart } from "../../context/CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemsNumber } = useCart()
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
          {isMenuOpen ? <button className="button-cerrar" onClick={() => setIsMenuOpen(!isMenuOpen)}>x</button> : ''}
          <NavLink 
            onClick={() => setIsMenuOpen(false)}
            to=""
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Inicio
          </NavLink>
          <NavLink 
            onClick={() => setIsMenuOpen(false)}
            to="perfumes"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Perfume
          </NavLink>
          {/* <NavLink 
            onClick={() => setIsMenuOpen(false)}
            to="/maquillaje"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Maquillaje
          </NavLink>
          <NavLink 
            onClick={() => setIsMenuOpen(false)}
            to="/cabello"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Cabello
          </NavLink> */}
          <NavLink 
            onClick={() => setIsMenuOpen(false)}
            to="/cart"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="box-cart">
              { itemsNumber === 0 ? (
                <span></span>
              ) : (
                <span className="number-cart">{itemsNumber}</span>
              )}
              <img className="icon-cart" src={cart} alt="Carrito" />
            </div>
          </NavLink>
        </nav>
    </header>
  );
}
