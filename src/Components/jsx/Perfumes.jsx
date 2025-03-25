import React from "react";
import { Perfumess } from "../../content/Perfumes";
import '../css/Perfumes.css'

export default function Perfumes() {
  return (
    <div className="perfumes-content">
      {Perfumess.map((p) => (
        <div className="perfumes-content__box" key={p.id}>
          <p>{p.title}</p>
          <p>{p.id}</p>
        </div>
      ))}
    </div>
  );
}
