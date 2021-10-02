import style from "./home.module.scss";

function Home() {
  return (
    <div className={style.home}>
      <h1>El mejor Spa en Cancun</h1>
      <h2>Blah Blah Blah</h2>
      {/* <img
        className={style.home__image}
        src="/stock/online5.jpg"
        alt="Home image of spa"
      /> */}
    </div>
  );
}

export default Home;
