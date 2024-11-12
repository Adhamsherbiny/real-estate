import Explore from "@/app/components/Explore";
import FirstSection from "@/app/components/FirstSection";
import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import "./styles/homepage.scss";

export default function Home() {
  return (
    <div className="homepage">
      <Nav />
      <FirstSection />
      <div className="container">
        <Explore />
      </div>
      <Footer />
    </div>
  );
}
