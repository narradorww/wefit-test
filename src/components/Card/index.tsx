import * as React from "react";
import style from "./Card.module.css";
import { CardProps } from "../../Interfaces/ICard";
import { CartContext } from "../../context/CartContext";
import CartPlus from "../../assets/images/cartplus.svg";
import Button from "../Button";

const Card: React.FC<CardProps> = ({ id, title, price, image, product }) => {
  const context = React.useContext(CartContext);
  const handleClick = () => {
    context.addToCart(product);
    console.log(`Clicou`);
    console.log(context.state.cart);
  };

  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={image} alt={`Capa do filme ${title}`} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.price}>
        <p>R$ {price.toFixed(2).toString().replace(".", ",")}</p>
      </div>
      <Button onClick={handleClick} className={style.addCart}>
        <img src={CartPlus} alt="Icone de um carrinho de mercado" />
        <p>0</p>
        <p>ADICIONAR AO CARRINHO</p>
      </Button>
    </div>
  );
};

export default Card;
