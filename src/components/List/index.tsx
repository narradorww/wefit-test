import React from "react";
import Card from "../Card";
import Loader from "../Loader";
import style from "./List.module.css";
import { IProduct } from "../../Interfaces/IProduct";
import { CartContext } from "../../context/CartContext";

const List = () => {
  const context = React.useContext(CartContext);

  return (
    <section className={style.principal}>
      {context.state.products.length !== 0 ? (
        context.state.products.map((product: IProduct) => {
          let qtty = 0;
          const defQtty = context.state.cart.items.find(
            (item) => item.product.id === product.id
          )?.count;
          qtty = defQtty ? defQtty : 0;
        
          return (
            <Card
              key={product.id}
              product={product}
              id={product?.id}
              title={product?.title}
              price={product?.price}
              image={product?.image}
              qtty={qtty}
            />
          );
        })
      ) : (
        <div className={style.loader}>
          <Loader />
        </div>
      )}
    </section>
  );
};

export default List;
