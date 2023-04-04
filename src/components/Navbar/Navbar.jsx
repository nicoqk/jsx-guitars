import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://res.cloudinary.com/dk9yniigh/image/upload/v1680557771/logo_jsx_kr9hai.jpg"
        alt="JSX Guitars - Guitarras y Bajos"
      />
      <ul style={{ display: "flex", gap: "35px" }}>
        <li>Inicio</li>
        <li>Guitarras Eléctricas</li>
        <li>Guitarras Acústicas</li>
        <li>Bajos</li>
      </ul>
      <CartWidget />
    </div>
  );
};
