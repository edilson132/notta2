import CardBanner4 from "../CardBanner/CardBanner4";
import DataBanner4 from "../DataBanner/DataBanner4";
import "./Banner4.css";

const Banner4 = () => {
  return (
    <section className="container-4">
      {DataBanner4.map((props) => (
        <CardBanner4
          key={props.id}
          image={props.image}
          tittle={props.tittle}
          paragraph1={props.paragraph1}
          paragraph2={props.paragraph2}
          button={props.button}
        />
      ))}
    </section>
  );
};

export default Banner4;
