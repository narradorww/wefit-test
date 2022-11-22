import { IProduct } from "./IProduct";

export interface IButtonCart {
    qty: number;
    product?: IProduct;
    onClick: Function

}