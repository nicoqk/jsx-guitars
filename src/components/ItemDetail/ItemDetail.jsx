import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const ItemDetail = ({ product }) => {
  return (
    <div>
      <img src={product.img} alt={product.title} />
      <h2>{product.title}</h2>
      <h4>{product.description}</h4>
      <Link to="/">
        <Button variant="outlined" size="small">
          Volver a Inicio
        </Button>
      </Link>
    </div>
  );
};
