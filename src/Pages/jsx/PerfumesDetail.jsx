import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Perfumess } from "../../content/Perfumes";
import "../css/PerfumesDetail.css";
import { useCart } from "../../context/CartContext";

export default function PerfumeDetail() {
  const { addToCart } = useCart();
  const { perfumeId } = useParams();

  const message = () => {
    const men = document.getElementById('message');
    men.classList.add('show');
  
    setTimeout(() => {
      men.classList.remove('show');
    }, 3000);
  };
  
  const perfume = Perfumess.find((p) => p.id === parseInt(perfumeId));
  if (!perfume) {
    return <h2>Perfume no encontrado</h2>;
  }

  return (
    <div className="perfume-detail">
      <div className="perfume-detail-div">
        <img src={perfume.img} alt={perfume.title} />
        <h4>{perfume.title}</h4>
        <p>{perfume.price} $</p>
        <button
          onClick={() => {
            addToCart(perfume);
            message();
          }}
        >
          Añadir a la cesta
        </button>
      </div>
      <Link className="link" to="/">
        Volver atras
      </Link>
      <div id="message" className="float-message">
        <p>Producto añadido correctamente</p>
      </div>
    </div>
  );
}
