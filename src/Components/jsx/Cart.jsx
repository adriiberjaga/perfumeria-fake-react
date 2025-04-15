import React from 'react'
import { useCart } from '../../context/CartContext'

export default function Cart() {
  const { cartItems } = useCart()
  return (
    <div>
        {cartItems.map((p, index) =>(
          <div key={index}>
            <p>{p.title}</p>
          </div>
        ))}
    </div>
  )
}
