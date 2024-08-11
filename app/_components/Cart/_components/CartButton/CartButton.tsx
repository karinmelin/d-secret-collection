"use client";
import { BaseIcon } from "@components";
import { FunctionComponent, useState } from "react";
import styles from "./CartButton.module.scss";
import { Cart } from "../Cart";

type CartButtonProps = {};

const CartButton: FunctionComponent<CartButtonProps> = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <button className={styles.cartButton} onClick={toggleDrawer(true)}>
        <BaseIcon
          className={styles.cartIcon}
          src="/icons/cart.svg"
          alt="cart"
          width={48}
          height={48}
          sizes="(max-width: 1024px) 29px"
          priority
        />
      </button>
      <Cart toggleDrawer={toggleDrawer} open={open} />
    </>
  );
};

export default CartButton;
