import React from 'react';
import { Tshirtlist } from './component/tshirtlist';
import { Cart } from './component/Cart'
import { CartProvider } from './context/Cartcontext';
import { Navbar } from './component/header'
export const App = () => {

  return(
  <CartProvider>
  <div>
    <Navbar />
    <Cart />
     <Tshirtlist />
  </div>
  </CartProvider>
  )}
