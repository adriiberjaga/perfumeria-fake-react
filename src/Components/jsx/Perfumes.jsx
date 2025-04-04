import React from "react";
import { Perfumess } from "../../content/Perfumes";
import '../css/Perfumes.css'
import { NavLink, Link } from "react-router-dom";

export default function Perfumes() {
  return (
    <div className="perfumes-content">
      {Perfumess.map((p) => (
        <NavLink className='navlink' to={`/perfume/${p.id}`} key={p.id}>
        <div className="perfumes-content__box" >
          <img src={p.img} alt="" />
          <p className="overlay foto-title">{p.title} <br></br> {p.price} $</p>
        </div>
        </NavLink>

      ))}
    </div>
  );
}
