import React from "react";
import { useCart } from "../../context/CartContext";
import "../css/Cart.css";
import { Link } from "react-router-dom";
export default function Cart() {
  const { cartItems, itemsNumber, removeFromCart, clearCart, addToCart } =
    useCart();
  console.log(cartItems);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      {cartItems.map((p, index) => (
        <div key={index} className="cart-item">
          <img src={p.img} alt={p.title} />
          <div>
            <h3>{p.title}</h3>
            <p>
              {p.desc} - {p.price}€
            </p>
            <p>Cantidad: {p.quantity}</p>
          </div>
          <div className="cart-buttons">
            <button onClick={() => addToCart(p)}>+</button>
            <button onClick={() => removeFromCart(p.id)}>-</button>
          </div>
        </div>
      ))}
      {itemsNumber >= 1 ? (
        <>
          <h2 className="cart-total">Total: {totalPrice.toFixed(2)}€</h2>
          <button onClick={() => clearCart()}>Eliminar carrito </button>
        </>
      ) : (
        <span></span>
      )}
      {itemsNumber == 0 ? (
        <>
          <h4>No hay productos en la cesta
           <Link to='/'><span>Empezar a comprar</span> </Link> 
          </h4>
        </>
      ) : (
        <span></span>
      )}
    </div>
  );
}
