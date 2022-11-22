export interface IButton {
    children?:   React.ReactNode;
    onClick?:   () => void;
    disabled?: boolean;
    className?: string;

}