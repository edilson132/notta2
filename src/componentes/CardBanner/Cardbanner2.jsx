import "../DataBanner/DataBanner2";
import "./CardBanner2.css";

const CardBanner2 = (props) => {
  return (
    <section className="container">
      <div className="container-texto">
        <div>
          <h1>{props.tittle}</h1>
        </div>
        <div>
          <p> {props.paragraph}</p>
        </div>
      </div>
      <img src={props.image} alt="Imagem do segundo banner" />
    </section>
  );
};

export default CardBanner2;
