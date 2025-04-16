import React from 'react'
import { useCart } from '../../context/CartContext'

export default function Cart() {
  const { cartItems } = useCart()
  return (
    <div>
        {cartItems.map((p, index) =>(
          <div key={index}>
            <img src={p.img} alt="" />
            <h3>{p.title}</h3>
            <p>{p.desc} - {p.price}$</p>
          </div>
        ))}
    </div>
  )
}
