import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();
  const navigate = useNavigate();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Desea vaciar el carrito?",
      icon: "question",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Confirmar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
      } else if (result.isDenied) {
      }
    });
  };

  return (
    <div>
      <Cart
        navigate={navigate}
        total={total}
        clearCartWithAlert={clearCartWithAlert}
        cart={cart}
        deleteProductById={deleteProductById}
      />
    </div>
  );
};

export default CartContainer;
