import CardBannerMobile from "../CardBanner/CardBannerMobile";
import DataBannerMobile from "../DataBanner/DataBannerMobile";
import Slider from "react-slick";
import "./BannerMobile.css";

const BannerMobile = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
  };
  return (
    <section className="container-banner-mobile">
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />

      <Slider {...settings}>
        {DataBannerMobile.map((props) => (
          <CardBannerMobile
            key={props.id}
            tittle={props.tittle}
            button={props.button}
            image={props.image}
          />
        ))}
      </Slider>
    </section>
  );
};

export default BannerMobile;
