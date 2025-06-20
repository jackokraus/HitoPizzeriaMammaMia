import React from 'react';
import { pizzas } from './pizzas';

const Cart = () => {
    const totalPrice = pizzas.reduce((sum, pizza) => sum + pizza.price, 0);
  return (
    <div >
        <h1>Detalles del pedido</h1>
      <ul className="carto">
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            
           
            <img src={pizza.img} alt={pizza.name} width="20" />
            {pizza.name}
            Precio: ${pizza.price} <button>-</button> 1<button>+</button>
          </li>
        ))}
        <h2>Total: ${totalPrice}</h2>
      </ul>
     
    </div>
  );
}

export default Cart;
