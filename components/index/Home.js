import style from "./home.module.scss";

function Home() {
  return (
    <div className={style.home}>
      <h1>El mejor Spa en Cozumel</h1>
      <h2>The best Spa to relax in Cozumel</h2>
      <a href="#services" className={style.homeButton}>
        Ver Servicios
      </a>
    </div>
  );
}

export default Home;
