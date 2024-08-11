"use client";
import { FunctionComponent } from "react";
import styles from "./Button.module.scss";
import { BaseIcon } from "..";

type ButtonProps = {
  text: string;
  handleClick: () => void;
};

const Button: FunctionComponent<ButtonProps> = ({ text, handleClick }) => {
  return (
    <button
      className={styles.button}
      onClick={handleClick}
    >
      {text}
      <BaseIcon src={"/icons/cart.svg"} alt={"cart"} width={40} height={40} />
    </button>
  );
};

export default Button;
