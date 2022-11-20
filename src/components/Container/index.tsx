import React from 'react';
import style from './Container.module.css'; 
import Loader from '../../assets/images/ovalLoader.png';



const Container = () => {
    return (
        <section className= {style.principal}>
            <img data-testid='loader' src={Loader} className={style.loader} alt="circulo cinza indicando carregamento"/>
        </section>
    )
};

export default Container