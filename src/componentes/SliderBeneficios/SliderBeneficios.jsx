import "../DataBeneficios/DataBeneficios";
import "../CardBeneficios/CardBenecios";
import React from "react";
import Slider from "react-slick";
import DataBeneficios from "../DataBeneficios/DataBeneficios";
import CardBeneficios from "../CardBeneficios/CardBenecios";
import "./SliderBeneficios.css";

const SliderBeneficios = (props) => {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="container-slider-beneficios">
      <link
        key={props.image}
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        key={props.id}
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />

      <Slider {...settings}>
        {DataBeneficios.map((props) => (
          <CardBeneficios
            Key={props.id}
            image={props.image}
            tittle={props.tittle}
            paragraph={props.paragraph}
          />
        ))}
      </Slider>
    </section>
  );
};

export default SliderBeneficios;
