import React, { useContext } from 'react';
import { Cartcontext } from '../context/Cartcontext';

export const Cart = () => {
    const [cart, setCart] = useContext(Cartcontext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    return (
        <div>
            <h3>Items in Cart : {cart.length}</h3>
            <h3>Total price : {totalPrice} </h3>
            
        </div>
    )
}
