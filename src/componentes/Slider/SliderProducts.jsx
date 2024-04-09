<<<<<<< HEAD
import React from "react";
import DataProducts from "../DataProducts/DataCardProducts";
import CardProduct from "../CardProducts/CardProduct";
import Slider from "react-slick";
import "./SlideProducts.css";

const SliderComponet = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel-card">
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
        {DataProducts.map((props) => (
          <CardProduct
            key={props.nome}
            nome={props.nome}
            image={props.image}
            imageVariation={props.imageVariation}
            price={props.price}
            discount={props.discount}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponet;
=======
import React from "react"
import { Carousel, CarouselSlide } from '@mantine/carousel';
import DataProducts from "../DataProducts/DataCardProducts";
import CardProduct from "../Card/CardProduct";
import { MantineProvider } from "@mantine/core";
import '@mantine/carousel/styles.css';
import { rem } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import './Slide.css'



const Slider = (props) => {
    return (
        <MantineProvider>
          <Carousel
                key={props.nome}
                height={200}
                slideSize="10%"
                slideGap="md"
                loop
                align="start"
                slidesToScroll={3}
                nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
                previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}
                >
                
                {DataProducts.map(props => 
                
                <CarouselSlide key={props.nome}>
                    <CardProduct
                        key={props.nome}
                        nome={props.nome}
                        image={props.image}
                        imageVariation={props.imageVariation}
                        price={props.price}
                        discount={props.discount}
                        />
                </CarouselSlide>
                )}
        
          </Carousel>
        </MantineProvider>
        
    )
        
}

export default Slider
>>>>>>> b33bf69492fb69cdff02ad038fdc3dbed9730886
