import React from 'react';
import { Tshirt } from './tshirt'
import ADtrouser from '../images/ADtrouser.jpg';
import ADD from '../images/ADD.jpg';
import ADTshirt from '../images/ADTshirt.jpg';
import RBKTshirt from '../images/RBKTshirt.jpg';
import TshirtNK from '../images/TshirtNK.jpg';

export const Tshirtlist = () => {
     const Database = [
          {name : "Addidas Tshirt", image: ADTshirt, price: 10, id:22},
          {name : "Addidas trouser", image: ADtrouser, price: 25, id:22},
          {name : "Nike Tshirt", image: TshirtNK,  price: 10, id:22},
          {name : "Reebok Tshirt", image: RBKTshirt,  price: 10, id:22},
          {name : "Addidas shoes", image: ADD, price: 20, id:22}

     ]
    return (
        <div>
            {
                Database.map(item =>(
                    <Tshirt name ={item.name}
                    price ={item.price}
                    image={item.image}
                    key={item.id}/>

                ))
            }
        </div>
    )
}
