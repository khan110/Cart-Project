import React, { useState } from 'react';

export const Cartcontext = React.createContext();

export const CartProvider = (props) => {
 const [cart, setCart] = useState([]);
    return(
    <Cartcontext.Provider value={[cart, setCart]}>
        {props.children}
    </Cartcontext.Provider>
    )};
