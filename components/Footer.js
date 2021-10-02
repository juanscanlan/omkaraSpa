import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <span>Copyright &copy; 2021 - pagina.com</span>
      </div>
      <div>
        <span>Site Developed by Juan Scanlan</span>
      </div>
    </footer>
  );
}

export default Footer;
