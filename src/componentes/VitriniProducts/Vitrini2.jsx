import Slider from "../Slider/SlideProducts2";
import "./Vitrini2.css";

const Vitrini2 = () => {
  return (
    <section className="container-vitrini-2">
      <div className="container-carousel-fundo">
        <div className="container-vitrini-header-2">
          <div className="container-vitrini-titulo-2">
            <h3>best sellers</h3>
          </div>
        </div>

        <div>
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Vitrini2;
