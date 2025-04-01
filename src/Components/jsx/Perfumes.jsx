import React from "react";
import { Perfumess } from "../../content/Perfumes";
import '../css/Perfumes.css'

export default function Perfumes() {
  return (
    <div className="perfumes-content">
      {Perfumess.map((p) => (
        <div className="perfumes-content__box" key={p.id}>
          <img src={p.img} alt="" />
          <p className="overlay foto-title">{p.title} <br></br> {p.price} $</p>
        </div>
      ))}
    </div>
  );
}
