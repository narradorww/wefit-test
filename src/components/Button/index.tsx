import {FC} from 'react';
import { IButton } from "../../Interfaces/IButton";
import style from './Button.module.css';


const Button:FC<IButton> = ({ children, onClick, disabled , className}) => {
    return (
      <button
      className={className}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  };

export default Button;