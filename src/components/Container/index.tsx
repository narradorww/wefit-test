import React from 'react';
import Card from '../Card';
import Loader from '../Loader';
import style from './Container.module.css'; 

const card = {
    "id": 1,
    "title": "Viúva Negra",
    "price": 9.99,
    "image": "https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png"
  }


const Container = () => {
    return (
        <section className= {style.principal}>
            {/* <Loader/> */}
            <Card id={card.id} title={card.title} price={card.price} image={card.image} addToCart={() => {}}/>
        </section>
    )
};

export default Container