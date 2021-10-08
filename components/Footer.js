import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <span>Copyright &copy; 2021 - pagina.com</span>
      </div>
      <div>
        <span>
          <a
            href="https://juanscanlan.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            Site Developed by Juan Scanlan
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
