import React from 'react'
import { useCart } from '../../context/CartContext'
import '../css/Cart.css'
export default function Cart() {
  const { cartItems, itemsNumber, removeFromCart, clearCart, addToCart   } = useCart();
  
  return (
    <div className="cart-container">
      {cartItems.map((p, index) => (
        <div key={index} className="cart-item">
          <img src={p.img} alt={p.title} />
          <div>
            <h3>{p.title}</h3>
            <p>{p.desc} - {p.price}€</p>
            <p>Cantidad: {p.quantity}</p>
          </div>
          <div className="cart-buttons">
          <button onClick={() => addToCart(p)}>+</button>
          <button onClick={() => removeFromCart(p.id)}>-</button>

          </div>
        </div>
      ))}
      {itemsNumber >= 1 ? (
      <button onClick={() => clearCart()}>Eliminar carrito  </button>

      ) : (
        <span></span>
      )}
    </div>
  );
}

