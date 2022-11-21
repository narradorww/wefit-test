import React from 'react'
import Ok from '../../assets/images/sucess.svg'
import style from './Sucess.module.css'



const Sucess = () => {
    return (
        <section className={style.principal}>
        <div className={style.sucesso}>
        <p>{"Compra realizada com sucesso!"}</p>
        <img src={Ok} alt="Ilustração de um jovem fazendo sinal de positivo"/>
        <button>Voltar</button>
        </div>
        </section>
    )
    }

export default Sucess;