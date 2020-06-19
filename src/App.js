import React from 'react';
import { Tshirtlist } from './component/tshirtlist';
import { Cart } from './component/Cart'
import { CartProvider } from './context/Cartcontext';
export const App = () => {

  return(
  <CartProvider>
  <div>
    <Cart />
     <Tshirtlist />
  </div>
  </CartProvider>
  )}
