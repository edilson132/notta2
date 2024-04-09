import CardBanner2 from "../CardBanner/Cardbanner2";
import DataBanner2 from "../DataBanner/DataBanner2";

const Banner2 = () => {
  return (
    <div>
      {DataBanner2.map((props) => (
        <CardBanner2
          key={props.id}
          tittle={props.tittle}
          paragraph={props.paragraph}
          image={props.image}
        />
      ))}
    </div>
  );
};

export default Banner2;
