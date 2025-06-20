import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from './pizzas';
import Cart from './Cart';


const Home = () => {
  return (
    <div /*className="carrrs"*/>
      <Header/>
     {/*<CardPizza pizzas={pizzas} />*/}
     <Cart/>
    </div>


  );
}

export default Home;
