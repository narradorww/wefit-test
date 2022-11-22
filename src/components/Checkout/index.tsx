import {FC} from 'react';
import style from "./Checkout.module.css";
import Add from "../../assets/images/addIcon.svg";
import Minus from "../../assets/images/subIcon.svg";
import Trash from "../../assets/images/trashIcon.svg";

interface ICheckout {
    image: string;
    title: string;
    price: number;
    count: number;
    subtotal: number | string;
    remove: () => void;
    increase: () => void;
    decrease: () => void;
}

const Checkout: FC<ICheckout> = ({image, title, price, subtotal, count , increase, decrease, remove }) => {
    return (
        <section className={style.checkout}>
            <div className={style.item}>
            <p className={style.productTitle}>PRODUTO</p>
            <div className={style.product}>
                
                <div className={style.cover}>
                <img className={style.image} src={image} alt={`Capa do filme ${title}`}/>
                </div>
                <div className={style.info}>
                    <div className={style.title}>
                        {title}
                    </div>
                    <div className={style.price}>
                        R$ {price.toFixed(2).toString().replace(".", ",")}
                    </div>
                </div>
            </div>
            </div>
            <div className={style.quantity}>
                <p className={style.quantityTitle}>QTD</p>
                <div className={style.counter}>
                    <img src={Minus} alt="Um botão com o simbolo de subtração" onClick={decrease}/>
                    <input className={style.input} type="number" value={count} />
                    <img src={Add} alt="Um botão com o simbolo de adição" onClick={increase} />
                </div>
            </div>
            <div className={style.subtotal}>
                <p className={style.subtotalTitle}>SUBTOTAL</p>
                <p className={style.subtotalValue}>R$ {subtotal}</p>
            </div>
            <div className={style.remove}>
                <img src={Trash} alt="Um botão com o simbolo de lixeira" onClick={remove} />
            </div>
        </section>
    )    
}

export default Checkout