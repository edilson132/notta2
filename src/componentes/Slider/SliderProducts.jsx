import React from "react"
import { Carousel } from '@mantine/carousel';
import DataProducts from "../DataProducts/DataCardProducts";
import CardProduct from "../Card/CardProduct";
import { MantineProvider } from "@mantine/core";
import '@mantine/carousel/styles.css';




const Slider = () => {
    return (
        <MantineProvider>
            <Carousel withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      align="start"
      slidesToScroll={3} >
                {DataProducts.map(props => <CardProduct
                 key={props.nome}
                 nome={props.nome}
                 image={props.image}
                 imageVariation={props.imageVariation}
                 price={props.price}
                 discount={props.discount}
                />)}
        
        </Carousel>
        </MantineProvider>
        
    )
        
}

export default Slider