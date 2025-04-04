import React from "react";
import { useParams, Link } from "react-router-dom";
import { Perfumess } from "../../content/Perfumes";
import "../css/PerfumesDetail.css";
export default function PerfumeDetail() {
  const { perfumeId } = useParams();
  const perfume = Perfumess.find((p) => p.id === parseInt(perfumeId));
  if (!perfume) {
    return <h2>Perfume no encontrado</h2>;
  }

  return (
    <div className="perfume-detail">
      <div className="perfume-detail-div">
      <div className="perfume-detail__image">
        <img src={perfume.img} alt={perfume.title} />
        <h4>{perfume.title}</h4>

      </div>
      <div className="perfume-detail__info">
        <p>{perfume.price} $</p>
      </div>
      </div>
      <Link className="link" to="/">Volver atras</Link>
    </div>
  );
}
