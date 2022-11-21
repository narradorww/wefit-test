import React, {FC} from 'react'
import { IBotaoCarrinho } from "../../Interfaces/IBotaoCarrinho";
import CartPlus from '../../assets/images/cartplus.svg';

import style from './BotaoCarrinho.module.css';



const BotaoCarrinho: FC<IBotaoCarrinho> = ({id, quantidade, cor }) => {
    return (
        <div  className={style.addCart}>
        <img src={CartPlus} alt="Icone de um carrinho de mercado" />
        <p>0</p>
        <p>ADICIONAR AO CARRINHO</p>
    </div>
    )
}

export default BotaoCarrinho