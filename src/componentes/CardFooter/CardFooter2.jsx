import "../DataFooter/DataFooter2";
import "./CardFooter2.css";

const CardFooter2 = (props) => {
  return (
    <div className="container-footer-2">
      <div
        className="
      container-footer-2-p1"
      >
        <h1>{props.tittle1}</h1>
        <img src={props.icone1} alt="" />
      </div>
      <div className="container-footer-2-p2">
        <h1>{props.tittle2}</h1>
        <h1>{props.tittle3}</h1>
        <h1>{props.tittle4}</h1>
      </div>
      <div className="container-footer-2-p3">
        <img src={props.icone2} alt="" />

        <p>{props.paragraph}</p>

        <div className="container-footer-2-p3-1">
          <img src={props.camada1} alt="" />
          <img src={props.camada2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardFooter2;
