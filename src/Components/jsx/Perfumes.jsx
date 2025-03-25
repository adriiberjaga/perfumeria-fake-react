import React from "react";
import { Perfumess } from "../../content/Perfumes";

export default function Perfumes() {
  return (
    <div>
      {Perfumess.map((p) => (
        <div key={p.id}>
          <p>{p.title}</p>
          <p>{p.id}</p>
        </div>
      ))}
    </div>
  );
}
