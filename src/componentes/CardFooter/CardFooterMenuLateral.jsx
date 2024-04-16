import "../DataFooterMenuLateral/DataFooterMenuLateral.jsx";
import "./CardFooterMenuLateral.css";

const CardFooterMenuLateral = (props) => {
  return (
    <section className="container-footer-menu-lateral">
      <div className="container-footer-menu-lateral-2">
        <h1>{props.tittle}</h1>
        <img src={props.icon1} alt="" />
      </div>
      <div className="container-footer-menu-lateral-3">
        <div className="container-footer-menu-lateral-itens-1">
          <img src={props.icon2} alt="" />
          <img src={props.icon3} alt="" />
          <img src={props.icon4} alt="" />
        </div>
        <div className="container-footer-menu-lateral-itens-2">
          <p>{props.paragraph1}</p>
          <p>{props.paragraph2}</p>
          <p>{props.paragraph3}</p>
        </div>
      </div>
    </section>
  );
};

export default CardFooterMenuLateral;
