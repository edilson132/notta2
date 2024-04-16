import CardFooterMenuLateral from "../CardFooter/CardFooterMenuLateral";
import DataFooterMenuLateral from "../DataFooterMenuLateral/DataFooterMenuLateral";
import "./FooterMenuLateral.css";

const FooterMenuLateral = () => {
  return (
    <div className="container-primary">
      {DataFooterMenuLateral.map((props) => (
        <CardFooterMenuLateral
          tittle={props.tittle}
          icon1={props.icon1}
          icon2={props.icon2}
          icon3={props.icon3}
          icon4={props.icon4}
          paragraph1={props.paragraph1}
          paragraph2={props.paragraph2}
          paragraph3={props.paragraph3}
        />
      ))}
    </div>
  );
};

export default FooterMenuLateral;
