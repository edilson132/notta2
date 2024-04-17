import "../DataFooter/DataFooter1";
import "./CardFooter.css";

const CardFooter1 = (props) => {
  return (
    <div className="container-footer1">
      <div className="container-position-footer-1">
        <h1>{props.tittle}</h1>
        <div className="container-footer-1">
          <img src={props.icone} alt="" />
          <p>{props.paragraph1}</p>
        </div>
        <p>{props.paragraph2}</p>
        <p>{props.paragraph3}</p>
        <p>{props.paragraph4}</p>
        <p>{props.paragraph5}</p>
      </div>
    </div>
  );
};

export default CardFooter1;
