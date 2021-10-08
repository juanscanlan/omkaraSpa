import styles from "./navbar.module.scss";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/Ictioterapia">
          <span>Fish Therapy</span>
        </Link>
        <Link href="/Masajes">
          <span>Masajes</span>
        </Link>
        <Link href="/Velados">
          <span>Velados</span>
        </Link>
        <Link href="/Depilacion">
          <span>Depilación</span>
        </Link>
        <Link href="/Nails">
          <span>Uñas</span>
        </Link>
      </nav>
      <nav className={styles.navbarMobile}>
        <Link href="/Ictioterapia">
          <img src="navbar/icons/fishtherapy.png" alt="Fish therapy" />
        </Link>
        <Link href="/Masajes">
          <img src="navbar/icons/massage.png" alt="Fish therapy" />
        </Link>
        <Link href="/Velados">
          <img src="navbar/icons/velado.png" alt="Fish therapy" />
        </Link>
        <Link href="/Depilacion">
          <img src="navbar/icons/waxing.png" alt="Fish therapy" />
        </Link>
        <Link href="/Nails">
          <img src="navbar/icons/manicure.png" alt="Fish therapy" />
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
