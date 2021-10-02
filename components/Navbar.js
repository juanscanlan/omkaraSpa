import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span>Inicio</span>
      <span>Servicios</span>
      <span>Productos</span>
      <span>Galeria</span>
      <span>Contacto</span>
    </nav>
  );
}

export default Navbar;
