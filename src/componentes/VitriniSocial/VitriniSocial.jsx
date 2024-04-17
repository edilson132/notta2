import { useEffect, useState } from "react";
import CardImageSocial from "../CardVitrini/CardImageSocial";
import CardVitriniSocial from "../CardVitrini/CardVitriniSocial";
import "../DataVitrini/DataVitriniSocial";
import DataVitrineSocial from "../DataVitrini/DataVitriniSocial";
import DataVitrineSocialMobile from "../DataVitrini/DataVitriniSocialMobile";
import "../DataVitrini/DataVitriniSocialText";
import DataVitrineSocialText from "../DataVitrini/DataVitriniSocialText";
import "./VitriniSocial.css";

const VitriniSocial = () => {
  const [showBlock, setShowBlock] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 480) {
        setShowBlock(false);
      } else {
        setShowBlock(true);
      }
    };

    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", handleResize);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {showBlock && (
        <div className="container-vitrini-social-img-2">
          {DataVitrineSocialMobile.map((props) => (
            <div className="container-vitrini-imgs-mobile">
              <img src={props.image} alt="" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default VitriniSocial;
