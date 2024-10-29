import Explore from "./Explore";
import FirstSection from "./FirstSection";
import Nav from "./Nav";
import "./styles/homepage.scss";

export default function Home() {
  return (
    <div className="homepage">
      <Nav />
      <FirstSection />
      <div className="container">
        <Explore />
      </div>
    </div>
  );
}
