import "../DataCadastro/DataCadastro";
import "./CardCadastro.css";

const CardCadastro = (props) => {
  return (
    <section className="container-cadastro">
      <div className="container-cadastro-paragraph">
        <p>{props.paragraph1}</p>
        <p>{props.paragraph2}</p>
      </div>
      <div className="container-cadastro-inputs">
        <input
          className="container-cadastro-input"
          type="text"
          name="email"
          placeholder={props.placeholder1}
        />
        <input
          className="container-cadastro-input"
          type="text"
          name="name"
          placeholder={props.placeholder2}
        />
        <input
          className="container-cadastro-input"
          type="text"
          name="birthday"
          placeholder={props.placeholder3}
        />
      </div>
      <div className="container-cadastro-button">
        <button className="container-button">{props.button}</button>
        <div className="container-cadastro-paragraph-2">
          <p>{props.paragraph3}</p>{" "}
          <span>
            <a href="#">{props.span}</a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default CardCadastro;
