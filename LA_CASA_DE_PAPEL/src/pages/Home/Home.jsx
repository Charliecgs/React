import "./Home.css";

const Home = () => {
  return (
    <main className="money-heist-page-home">
    <div className="divVideo">
      <video src="../../../public/videos/moneyHeist.mp4" type="video/mp4" autoPlay loop muted="muted" className="videoHeist"/>
    </div>
    </main>
  );
};

export default Home;
