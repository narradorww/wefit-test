import React, {FC} from 'react'
import { IButtonCart} from "../../Interfaces/IButtonCart";
import CartPlus from '../../assets/images/cartplus.svg';

import style from './ButtonCart.module.css';



const ButtonCart: FC<IButtonCart> = ({id, qty, color }) => {
    return (
        <button  className={style.addCart}>
        <img src={CartPlus} alt="Icone de um carrinho de mercado" />
        <p>0</p>
        <p>ADICIONAR AO CARRINHO</p>
    </button>
    )
}

export default ButtonCart;