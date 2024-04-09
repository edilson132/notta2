import "./CardBanner3.css";
import "../DataBanner/DataBanner3";

const CardBanner3 = (props) => {
  return (
    <section>
      <div>
        <div className="container-tittle">
          <h1>{props.tittle}</h1>
        </div>
        <div className="container-image">
          <img src={props.image} alt="Imagem do terceiro banner " />
        </div>
      </div>
    </section>
  );
};

export default CardBanner3;
