import "../DataBanner/DataBannerMobile";
import "./CardBannerMobile.css";

const CardBannerMobile = (props) => {
  return (
    <section className="container-banner-mobile2">
      <div className="container-new-collection">
        <h1>{props.tittle}</h1>
        <button>{props.button}</button>
      </div>
      <img src={props.image} alt="" />
    </section>
  );
};

export default CardBannerMobile;
