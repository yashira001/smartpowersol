import Carousel from "../components/js/carousel/Carousel";
import Intro from "../components/js/intro/intro";
import Services from "../components/js/services/services";

export default function Home() {
  return (
    <div className="front">
      <Carousel />
      <Intro />
      <Services />
    </div>
  );
}
