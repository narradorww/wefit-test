import React, {FC} from "react";
import ImageLoader from "../../assets/images/ovalLoader.png";
import { ILoader } from '../../Interfaces/ILoader';
import style from "./Loader.module.css";

const Loader : FC<ILoader> = () => {
  return (
    <img
      src={ImageLoader}
      className={style.loader}
      alt="circulo cinza em gradiente indicando carregamento"
    />
  );
};

export default Loader;
