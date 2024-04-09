import "../DataVitrini/DataVitriniSocial";
import "./CardImageSocial.css";

const CardImageSocial = (props) => {
  return (
    <div className="container-vitrini-imgs">
      <img src={props.image} alt="" />
    </div>
  );
};

export default CardImageSocial;
