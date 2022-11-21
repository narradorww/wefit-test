export interface CardProps {
    id: number;
    title: string;
    price: number;
    image: string;
    addToCart?: (id: number) => void;
}