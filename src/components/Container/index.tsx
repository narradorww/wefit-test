import React from 'react';
import Loader from '../Loader';
import style from './Container.module.css'; 




const Container = () => {
    return (
        <section className= {style.principal}>
            <Loader/>
        </section>
    )
};

export default Container