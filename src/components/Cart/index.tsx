import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import Button from '../Button';
import Checkout from '../Checkout/index';
import style from "./Cart.module.css";


const Cart = () => {
    const context = useContext(CartContext);
    const totalPrice = context.state.cart.items.reduce((total, item) => 
    (total += (item.count)*(item.product.price)), 0 );
    

    return (

        <section className={style.cart}>
            <div className={style.items}>
                {context.state.cart.items.map((item) => (
                    <Checkout
                        key={item.product.id}
                        image={item.product.image}
                        title={item.product.title}
                        price={item.product.price}
                        count={item.count}
                        increase={() => context.increaseQuantity(item.product)}
                        decrease={() => context.decreaseQuantity(item.product)}
                        remove={() => context.removeFromCart(item.product)}
                        subtotal={(item.product.price * item.count).toFixed(2).toString().replace(".", ",")}
                    />
                ))}

            </div>
            <div className={style.line}/>
            <div className={style.checkout}>
                <Button className={style.buttonCheckout}>FINALIZAR PEDIDO</Button>

                <div className={style.total}>
                    <p className={style.totalTag}>TOTAL</p>
                    <p className={style.totalPrice}>R$ {totalPrice.toFixed(2).toString().replace('.',',')}</p>
                </div>
                </div>

        </section>



    )
}

export default Cart
