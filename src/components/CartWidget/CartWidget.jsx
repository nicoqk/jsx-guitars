import React from "react";
import styles from "./CartWidget.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const CartWidget = () => {
  return (
    <div className={styles.containerCartWidget}>
      <ShoppingCartOutlinedIcon />
      <span>5</span>
    </div>
  );
};

export default CartWidget;
