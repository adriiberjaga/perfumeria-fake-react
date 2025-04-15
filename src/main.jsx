import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from '../Router'
import { CartProvider } from './context/CartContext' // 👈 importa el contexto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider> {/* 👈 envuelves tu app con el proveedor */}
        <Router />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)
