import * as React from 'react';
import style from './Card.module.css';
import CartPlus from '../../assets/images/cartplus.svg';
import { CardProps } from '../../Interfaces/ICard';




const Card: React.FC<CardProps> = ({ id, title, price, image, addToCart }) => {
    return (
        <div className={style.card}>
            
            <div className={style.image}>
                <img src={image} alt={`Capa do filme ${title}`} />
            </div>
            <div  className={style.title}>
                {title}
            </div>
            <div  className={style.price}>
                <p>R$ {price.toFixed(2).toString().replace('.', ',')}</p>
            </div>
            <div  className={style.addCart}>
                <img src={CartPlus} alt="Icone de um carrinho de mercado" />
                <p>0</p>
                <p>ADICIONAR AO CARRINHO</p>
            </div>

        </div>
    );
}

export default Card;
