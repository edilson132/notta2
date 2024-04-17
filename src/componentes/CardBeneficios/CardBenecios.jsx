import "../DataBeneficios/DataBeneficios";
import "./CardBeneficios.css";

const CardBeneficios = (props) => {
  return (
    <div className="container-position-card-beneficios">
      <section className="container-vitrini-beneficios">
        <div className="container-vitrini-beneficios-img">
          <img src={props.image} alt="" />
        </div>
        <div className="container-vitrini-beneficios-text">
          <h1>{props.tittle}</h1>
          <p>{props.paragraph}</p>
        </div>
      </section>
    </div>
  );
};

export default CardBeneficios;
