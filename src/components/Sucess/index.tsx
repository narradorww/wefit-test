import React from 'react'
import Ok from '../../assets/images/sucess.svg'
import Button from '../Button'
import style from './Sucess.module.css'
import { Link } from 'react-router-dom';



const Sucess = () => {
    return (
        <section className={style.principal}>
        <div className={style.sucesso}>
        <p>{"Compra realizada com sucesso!"}</p>
        <img src={Ok} alt="Ilustração de um jovem fazendo sinal de positivo"/>
        <Link to ="/">
        <Button className={style.button}>Voltar</Button>
        </Link>
        </div>
        </section>
    )
    }

export default Sucess;