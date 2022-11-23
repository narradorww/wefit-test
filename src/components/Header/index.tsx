import React, {FC, useContext} from "react";
import Basket from "../../assets/images/basket.svg";
import style from "./Header.module.css";
import { IHeader } from "../../Interfaces/IHeader";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Header : FC<IHeader>  = () => {
  const context = useContext(CartContext);

  let totalItems =context.state.cart.items.reduce((total, item) => (total += item.count), 0);

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Link to="/" style={{textDecoration : 'none', color: 'white'}}>
        <p>WeMovies</p>
        </Link>
      </div>
      <div className={style.cart}>
        <div className={style.wrapCart}>
          <div className={style.myCart}>
            <p>Meu Carrinho</p>
          </div>
          <div className={style.statusCart}>
            <p>{totalItems}</p>
          </div>
        </div>
        <div className={style.iconBasket}>
          <Link to="/cart">
          <img
            src={Basket}
            alt="Icone de Cesta para Representar as Compras no Site"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
