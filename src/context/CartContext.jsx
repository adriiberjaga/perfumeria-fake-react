import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ( { children }) => {
    // const [cartItems, setCartItems] = useState([])
    const [cartItems, setCartItems] = useState([
        
{title: 'titulo 4', id: 5, desc: 'descripcion', img: '/src/images/perfume4.jpg', price: 34,
    quantity: 3}
    ])
    let itemsNumber = cartItems.length  

    const addToCart = (product) => {
        setCartItems(prev => {
          const existing = prev.find(item => item.id === product.id);
          if (existing) {
            return prev.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            return [...prev, { ...product, quantity: 1 }];
          }
          
        });
      };
      
      const removeFromCart = (productId) => {
        setCartItems(prev =>
          prev
            .map(item =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter(item => item.quantity > 0)
        );
      };
      
      
    const clearCart = () => {
        setCartItems([])
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
            itemsNumber
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)