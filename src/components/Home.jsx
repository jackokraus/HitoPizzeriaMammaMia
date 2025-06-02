import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  return (
    <div className="carrrs">
      <Header/>
      <CardPizza
 name="Napolitana"
 price={5950}
 ingredients={["mozzarella ,", "tomates , ", "jamón ,", "orégano "]}
 img="https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/48a49653c8716457eb0b2f7eb3c7d74c/Derivates/8d83d9ed4567fa15456d8eec7557e60006a15576.jpg"
 />
 <CardPizza
 name="Española"
 price={6950}
 ingredients={["mozzarella ,", "gorgonzola ,", "parmesano ,", "provolone ,"]}
 img="https://www.labuonapizza.cl/wp-content/uploads/2020/12/lbp-espanola-01.jpg"
 />
 <CardPizza
 name="Pepperoni"
 price={6950}
 ingredients={["mozzarella ,", "pepperoni ,", "orégano ,"]}
 img="https://www.pizzapizza.cl/wp-content/uploads/2021/01/pepperoni-web-scaled.jpg"
 />
    </div>


  );
}

export default Home;
