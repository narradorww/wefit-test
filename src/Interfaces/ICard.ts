import { IProduct } from './IProduct';

export interface CardProps {

    id: number;
    title: string;
    price: number;
    image: string;
    qtty: number;
    product: IProduct;
    onClick?: Function;
}