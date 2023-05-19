import React from "react";

import styles from "./ItemDetail.module.css";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import Counter from "../Counter/Counter";

export const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div>
      <div className={styles.containerItemDetail}>
        <div className={styles.containerImage}>
          <img src={product.img} alt="{product.title}" />
        </div>

        <div>
          <Typography gutterBottom variant="h4" component="div">
            {product.title}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography gutterBottom variant="body2" color="primary">
            Precio: USD {product.price}
          </Typography>
        </div>
      </div>
      {product.stock > 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Counter
            stock={product.stock}
            onAdd={onAdd}
            initial={cantidadTotal}
          />
        </div>
      ) : (
        <h2>No hay stock</h2>
      )}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/">
          <Button variant="outlined">
            <SettingsBackupRestoreIcon />
            Volver
          </Button>
        </Link>
      </div>
    </div>
  );
};
