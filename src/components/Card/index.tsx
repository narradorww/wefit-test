import React, { useContext, useEffect } from "react";
import style from "./Card.module.css";
import { CardProps } from "../../Interfaces/ICard";
import { CartContext } from "../../context/CartContext";
import CartPlus from "../../assets/images/cartplus.svg";
import Button from "../Button";

const Card: React.FC<CardProps> = ({ id, title, price, image, product }) => {
  const context = useContext(CartContext);
  const [color, setColor] = React.useState("blue");

  let qtty = 0;
  const defQtty = context.state.cart.items.find(
    (item) => item.product.id === product.id
  )?.count;
  qtty = defQtty ? defQtty : 0;

  useEffect(() => {
    if (qtty > 0) {
      setColor("green");
    } else {
      setColor("blue");
    }
  }, [qtty]);



 
  const handleClick = () => {
    context.addToCart(product);
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
      { color === "blue" ?<Button onClick={handleClick} className={style.addCartBlue} >
        <img src={CartPlus} alt="Icone de um carrinho de mercado" />
        <p>{qtty}</p>
        <p>ADICIONAR AO CARRINHO</p>
      </Button>
      :
      <Button onClick={handleClick} className={style.addCartGreen} >
        <img src={CartPlus} alt="Icone de um carrinho de mercado" />
        <p>{qtty}</p>
        <p>ADICIONAR AO CARRINHO</p>
      </Button>}
    </div>
  );
};

export default Card;
