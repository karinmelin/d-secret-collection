import { SwipeableDrawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FunctionComponent, ReactEventHandler } from "react";
import styles from "./Cart.module.scss";

type CartProps = {
  toggleDrawer: (newOpen: boolean) => ReactEventHandler;
  open: boolean;
};

const Cart: FunctionComponent<CartProps> = ({ toggleDrawer, open }) => {
  return (
    <SwipeableDrawer
      anchor={"right"}
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      sx={{
        "& .css-1160xiw-MuiPaper-root-MuiDrawer-paper": {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.wrapper_inner}>
          <button onClick={toggleDrawer(false)} className={styles.close_button}>
            <CloseIcon fontSize="large" />
          </button>
          <h2>Cart</h2>
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export default Cart;
