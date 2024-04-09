import CardImageSocial from "../CardVitrini/CardImageSocial";
import CardVitriniSocial from "../CardVitrini/CardVitriniSocial";
import "../DataVitrini/DataVitriniSocial";
import DataVitrineSocial from "../DataVitrini/DataVitriniSocial";
import "../DataVitrini/DataVitriniSocialText";
import DataVitrineSocialText from "../DataVitrini/DataVitriniSocialText";
import "./VitriniSocial.css";

const VitriniSocial = () => {
  return (
    <section className="container-midia-social">
      <div>
        {DataVitrineSocialText.map((props) => (
          <CardVitriniSocial
            key={props.id}
            tittle={props.tittle}
            paragraph1={props.paragraph1}
            paragraph2={props.paragraph2}
            button={props.button}
            a={props.a}
          />
        ))}
      </div>
      <div className="container-vitrini-social-img">
        {DataVitrineSocial.map((props) => (
          <CardImageSocial key={props.id} image={props.image} />
        ))}
      </div>
    </section>
  );
};

export default VitriniSocial;
