import React from 'react'
import Ok from '../../assets/images/sucess.svg'
import Button from '../Button'
import style from './Sucess.module.css'



const Sucess = () => {
    return (
        <section className={style.principal}>
        <div className={style.sucesso}>
        <p>{"Compra realizada com sucesso!"}</p>
        <img src={Ok} alt="Ilustração de um jovem fazendo sinal de positivo"/>
        <Button className={style.button}>Voltar</Button>
        </div>
        </section>
    )
    }

export default Sucess;