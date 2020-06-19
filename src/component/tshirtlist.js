import React from 'react';
import { Tshirt } from './tshirt'

export const Tshirtlist = () => {
     const Database = [
          {name : "Addidas Tshirt", price: 10, id:22},
          {name : "Addidas trouser", price: 25, id:22},
          {name : "Nike Tshirt", price: 10, id:22},
          {name : "Reebok Tshirt", price: 10, id:22},
          {name : "Addidas shoes", price: 20, id:22}

     ]
    return (
        <div>
            {
                Database.map(item =>(
                    <Tshirt name ={item.name}
                    price ={item.price}
                    key={item.id}/>

                ))
            }
        </div>
    )
}
