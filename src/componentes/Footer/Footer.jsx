import "../CardFooter/CardFooter";
import CardFooter1 from "../CardFooter/CardFooter";
import "../CardFooter/CardFooter2";
import CardFooter2 from "../CardFooter/CardFooter2";
import "../DataFooter/DataFooter1";
import DataFooter1 from "../DataFooter/DataFooter1";
import "../DataFooter/DataFooter2";
import DataFooter2 from "../DataFooter/DataFooter2";
import "./Footer.css";

const Footer = () => {
  return (
    <section>
      <div className="container-footer-p1">
        {DataFooter1.map((props) => (
          <CardFooter1
            key={props.id}
            tittle={props.tittle}
            icone={props.icone}
            paragraph1={props.paragraph1}
            paragraph2={props.paragraph2}
            paragraph3={props.paragraph3}
            paragraph4={props.paragraph4}
            paragraph5={props.paragraph5}
          />
        ))}
      </div>

      {DataFooter2.map((props) => (
        <CardFooter2
          tittle1={props.tittle1}
          icone1={props.icone1}
          tittle2={props.tittle2}
          tittle3={props.tittle3}
          tittle4={props.tittle4}
          icone2={props.icone2}
          paragraph={props.paragraph}
          camada1={props.camada1}
          camada2={props.camada2}
        />
      ))}
    </section>
  );
};

export default Footer;
