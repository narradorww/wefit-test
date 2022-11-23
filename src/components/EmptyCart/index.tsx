import React from 'react'
import Empty from '../../assets/images/nothingHere.svg'
import Button from '../Button'
import style from './EmptyCart.module.css'
import { Link } from 'react-router-dom';



const EmptyCart = () => {
    return (
        <section className={style.principal}>
        <div className={style.carrinhoVazio}>
        <p>{"Parece que não há nada por aqui :( "}</p>
        <img src={Empty} alt="Ilustração de uma mulher tocando um circulo azul"/>
        <Link to ="/">
        <Button className={style.button}>Voltar</Button>
        </Link>
        </div>
        </section>
    )
    }

export default EmptyCart