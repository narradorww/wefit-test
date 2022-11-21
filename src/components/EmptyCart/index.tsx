import React from 'react'
import Empty from '../../assets/images/nothingHere.svg'
import style from './EmptyCart.module.css'



const EmptyCart = () => {
    return (
        <section className={style.principal}>
        <div className={style.carrinhoVazio}>
        <p>{"Parece que não há nada por aqui :( "}</p>
        <img src={Empty} alt="Ilustração de uma mulher tocando um circulo azul"/>
        <button>Voltar</button>
        </div>
        </section>
    )
    }

export default EmptyCart