import React from 'react'
import { Inicioo } from '../../content/Inicio'
import { NavLink } from 'react-router-dom'
import '../css/Inicio.css'

export default function Inicio() {
  return (
    <div className='inicio-content'>
      {Inicioo.map((p) => ( 
        <NavLink className="inicio-navlink" to={`/perfume/${p.id}`} key={p.id}>
        <div className="inicio-content__box">
          <img src={p.img} alt="" />
          <p className="inicio-overlay inicio-foto-title">
            {p.title} <br></br> {p.price} $
          </p>
        </div>
      </NavLink>
      ))}
    </div>
  )
}
