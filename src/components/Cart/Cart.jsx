import { Button, Typography } from "@mui/material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  clearCartWithAlert,
  deleteProductById,
  total,
  navigate,
}) => {
  return (
    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <Typography>{item.title}.-</Typography>
                  <Typography>Precio: ${item.price}.-</Typography>
                  <Typography>Cantidad: {item.quantity}</Typography>
                </div>
                <Button
                  variant="outlined"
                  onClick={() => deleteProductById(item.id)}
                >
                  <HighlightOffOutlinedIcon />
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          {cart.length < 1 ? (
            <div className="btn-cart">
              <Typography variant="h6">El carrito está vacío</Typography>

              <Button variant="outlined" onClick={() => navigate("/")}>
                Agregar productos
              </Button>
            </div>
          ) : (
            <div className="btn-cart">
              <Typography variant="h6">Precio total: {total}</Typography>
              <div>
                {" "}
                <Button variant="outlined" onClick={() => navigate("/")}>
                  Continuar comprando
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/checkout")}
                >
                  Finalizar la compra
                </Button>
                <Button onClick={clearCartWithAlert} variant="outlined">
                  Vaciar carrito
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
