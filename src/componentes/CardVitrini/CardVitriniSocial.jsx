import "../DataVitrini/DataVitriniSocialText";
import "./CardVitriniSocial.css";

const CardVitriniSocial = (props) => {
  return (
    <div className="container-vitrini-social-midia">
      <h1>{props.tittle}</h1>
      <p>
        {props.paragraph1}
        <a
          className="container-vitrini-ancora"
          href="https://www.instagram.com/lacosdefilo/"
        >
          {props.a}
        </a>
        {props.paragraph2}
      </p>
      <button className="container-vitrini-button">{props.button}</button>
    </div>
  );
};

export default CardVitriniSocial;
