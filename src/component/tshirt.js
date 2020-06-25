import React, { useContext } from 'react';
import { Cartcontext } from '../context/Cartcontext';
import './tshirt.css';

export const Tshirt = (props) => {
const [cart, setCart] = useContext(Cartcontext);
const addtocart = () =>{
    const tshirt = {name: props.name, price: props.price, image: props.image}
    setCart(currentState => [...currentState, tshirt]);
 }
    return (
        <div>
           <h2>{props.name}</h2>   
          <img src={props.image} alt="shoeimg" className="image"/>
            <h4>{props.price}</h4>
            
            <button onClick={addtocart}>Add to Cart</button>
            <hr />
        </div>
    )
}
