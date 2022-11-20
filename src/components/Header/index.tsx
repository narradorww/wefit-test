import React from "react";
import Basket from "../../assets/images/basket.svg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <p>WeMovies</p>
      </div>
      <div className={style.cart}>
        <div className={style.wrapCart}>
          <div className={style.myCart}>
            <p>Meu Carrinho</p>
          </div>
          <div className={style.statusCart}>
            <p>0 itens</p>
          </div>
        </div>
        <div className={style.iconBasket}>
          <img
            src={Basket}
            alt="Icone de Cesta para Representar as Compras no Site"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
