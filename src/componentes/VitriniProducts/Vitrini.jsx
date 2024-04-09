import "./Vitrini.css";
import "../DataProducts/DataCardProducts.jsx";
import Slider from "../Slider/SliderProducts.jsx";
const Vitrini = () => {
  return (
    <section className="container-vitrini">
      <div className="container-vitrini-header">
        <div className="container-vitrini-titulo">
          <h3>new in</h3>
        </div>
      </div>

      <div>
        <Slider />
      </div>
    </section>
  );
};

export default Vitrini;
