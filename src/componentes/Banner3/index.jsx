import CardBanner3 from "../CardBanner/CardBanner3";
import DataBanner3 from "../DataBanner/DataBanner3";
import "./Banner3.css";

const Banner3 = () => {
  return (
    <div className="container-banner3">
      {DataBanner3.map((props) => (
        <CardBanner3 key={props.id} tittle={props.tittle} image={props.image} />
      ))}
    </div>
  );
};

export default Banner3;
