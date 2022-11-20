import React from 'react';
import Card from '../Card';
import Loader from '../Loader';
import style from './Container.module.css'; 

export interface ContainerProps {
    response: boolean,
}

const card = {
    "id": 1,
    "title": "Viúva Negra",
    "price": 9.99,
    "image": "https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png"
  }

const Container: React.FC<ContainerProps> = ({response}) => {
 response = true;

    return (
        <section data-testid='container' className= {style.principal}>
            {!response ? <Loader data-testid="loader"/>: 
            <Card id={card.id} title={card.title} price={card.price} image={card.image} addToCart={() => {}}/>}
        </section>
    )
};

export default Container