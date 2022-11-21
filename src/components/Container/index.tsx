import React from 'react';
import Api from '../../api/api';
import Card from '../Card';
import Loader from '../Loader';
import style from './Container.module.css';
import { IProducts } from '../../Interfaces/IProducts';






const Container = () => {
    const [products, setProducts] = React.useState<IProducts[] |null>(null);

    React.useEffect(() => {
        async function getProducts() {
            const response = await Api.get("/products");
            setProducts(response.data);
            }
        getProducts();
    }, []);



    return (
        <section data-testid='container' className={style.principal}>
            {products ? products.map((product: IProducts) => {
                return (
                    
                     <Card
                     data-testid='card'
                     key={product.id}
                     id={product?.id}
                     title={product?.title} 
                     price={product?.price} 
                     image={product?.image} 
                     />
                    
                )
                
            }) : <div className={style.loader}><Loader  data-testid="loader"/>
            </div>
                
            }
        </section>
    )
};

export default Container