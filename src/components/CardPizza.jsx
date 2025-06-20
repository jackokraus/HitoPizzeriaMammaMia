import React from 'react';
import { pizzas } from './pizzas';

const CardPizza = () => {
  return (
    <div className="carrs">


      {pizzas.map((pizza) => (
        <div
          className="card"
          key={pizza.id}

        >
          <img src={pizza.img} alt={pizza.name} width="200" />
          <div className="card-body">
            <h5 className="card-title">{pizza.name}</h5>
            <hr className="card-hr" />
            <div className="card-subtitle mb-2 text-body-secondary">
              <h6>Ingredientes:</h6>
              <ul>
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <hr className="card-hr" />
            <p className="card-text">Precio: ${pizza.price}</p>

            <button style={{ borderRadius: '4px', padding: '4px 8px' }}>Ver más</button>
            <button style={{ borderRadius: '4px', padding: '4px 8px' }}>Añadir</button>
          </div>
        </div>

      ))}
    </div>
  );
}; export default CardPizza;