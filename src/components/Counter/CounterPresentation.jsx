import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";

const CounterPresentation = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
      <Button size="small" variant="outlined" onClick={restar}>
        <RemoveIcon />
      </Button>
      <h3>{counter}</h3>
      <Button size="small" variant="outlined" onClick={sumar}>
        <AddIcon />
      </Button>
      <Button variant="outlined" onClick={() => onAdd(counter)}>
        <ShoppingCartCheckoutOutlinedIcon />
        Agregar al carrito
      </Button>
    </div>
  );
};

export default CounterPresentation;
