import styles from "./navbar.module.scss";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/Ictioterapia" passHref>
          <a>Ictioterapia</a>
        </Link>
        <Link href="/Masajes" passHref>
          <a>Masajes</a>
        </Link>
        <Link href="/Velados" passHref>
          <a>Velados</a>
        </Link>
        <Link href="/Faciales" passHref>
          <a>Faciales</a>
        </Link>
        <Link href="/Nails" passHref>
          <a>Uñas</a>
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
        <Link href="/Faciales">
          <img src="navbar/icons/facial.png" alt="Facials" />
        </Link>
        <Link href="/Nails">
          <img src="navbar/icons/manicure.png" alt="Nails" />
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
