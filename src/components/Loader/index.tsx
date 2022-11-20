import React from "react";
import style from "./Loader.module.css";
import ImageLoader from "../../assets/images/ovalLoader.png";

const Loader = () => {
  return (
    <img
      data-testid="loader"
      src={ImageLoader}
      className={style.loader}
      alt="circulo cinza em gradiente indicando carregamento"
    />
  );
};

export default Loader;
