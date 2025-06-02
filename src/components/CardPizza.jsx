import React from 'react';

const CardPizza = (props) => {
  return (
   <div className="carrs">
    <div className="card" >
    <img src={props.img} alt="Card visual" className="card-img" />
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <hr className="card-hr" />
    <h6 className="card-subtitle mb-2 text-body-secondary">Ingredientes :🍕 {props.ingredients}</h6>
      <hr className="card-hr" />
    <p className="card-text">Precio : ${props.price}</p>
    <button style={{ borderRadius: '4px', padding: '1px 2px',marginInline:'30px'}}>
  Ver mas
</button>
    <button style={{ borderRadius: '4px', padding: '1px 2px',marginInline:'30px'}}>
  Anadir
</button>
  </div>
</div>


</div>
  );
}

export default CardPizza;
