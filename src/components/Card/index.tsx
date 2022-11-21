import * as React from 'react';
import style from './Card.module.css';
import { CardProps } from '../../Interfaces/ICard';
import BotaoCarrinho from '../BotaoCarrinho';




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
            <BotaoCarrinho id={id} quantidade={0}  />


        </div>
    );
}

export default Card;
