import "../DataBanner/DataBanner4";
import "./CardBanner4.css";

const CardBanner4 = (props) => {
  return (
    <section className="container-banner-4">
      <div className="container-position">
        <div className="container-img-4">
          <img src={props.image} alt="Imagem do quinto Banner " />
        </div>
        <div className="container-texto-4">
          <div>
            <h1>{props.tittle}</h1>
            <p className="paragraph1">{props.paragraph1}</p>
            <p className="paragraph2">{props.paragraph2}</p>
            <button>{props.button}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardBanner4;
