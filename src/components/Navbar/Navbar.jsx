import { Button } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link, useNavigate, NavLink } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            style={{ width: "150px" }}
            className="logo"
            src="https://res.cloudinary.com/dk9yniigh/image/upload/v1680557771/jsxguitars/logo_jsx_kr9hai.jpg"
            alt="JSX Guitars - Guitarras y Bajos"
          />
        </Link>

        <ul style={{ display: "flex", gap: "30px" }}>
          {
            <Button variant="outlined" onClick={() => navigate("/")}>
              Inicio
            </Button>
          }
          {
            <Button
              variant="outlined"
              onClick={() => navigate("/category/electricas")}
            >
              Electricas
            </Button>
          }

          {
            <Button
              variant="outlined"
              onClick={() => navigate("/category/acusticas")}
            >
              Acusticas
            </Button>
          }
        </ul>
        <CartWidget />
      </div>

      <Outlet />
    </div>
  );
};
