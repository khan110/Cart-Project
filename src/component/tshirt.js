import React, { useContext } from 'react';
import { Cartcontext } from '../context/Cartcontext';

export const Tshirt = (props) => {
const [cart, setCart] = useContext(Cartcontext);
const addtocart = () =>{
    const tshirt = {name: props.name, price: props.price}
    setCart(currentState => [...currentState, tshirt]);
 }
    return (
        <div>
           <h2>{props.name}</h2> 
        
            <h4>{props.price}</h4>
            
            <button onClick={addtocart}>Add to Cart</button>
            <hr />
        </div>
    )
}
