import * as React from 'react';
import style from './Card.module.css';
import CartPlus from '../../assets/images/cartplus.svg';


export interface CardProps {
    id: number;
    title: string;
    price: number;
    image: string;
    addToCart: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ id, title, price, image, addToCart }) => {
    return (
        <div data-testid='card' className={style.card}>
            
            <div data-testid='image' className={style.image}>
                <img src={image} alt={`Capa do filme ${title}`} />
            </div>
            <div data-testid='title' className={style.title}>
                {title}
            </div>
            <div data-testid='price' className={style.price}>
                <p>R$ {price.toString().replace('.', ',')}</p>
            </div>
            <div  data-testid='button' className={style.addCart}>
                <img src={CartPlus} alt="Icone de um carrinho de mercado" />
                <p>0</p>
                <p>ADICIONAR AO CARRINHO</p>
            </div>

        </div>
    );
}

export default Card;
