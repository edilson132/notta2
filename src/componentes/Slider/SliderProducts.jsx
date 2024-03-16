import React from "react"
import { Carousel } from '@mantine/carousel';
import DataProducts from "../DataProducts/DataCardProducts";
import CardProduct from "../Card/CardProduct";
import { MantineProvider } from "@mantine/core";
import '@mantine/carousel/styles.css';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { rem } from '@mantine/core';



const Slider = (props) => {
    return (
        <MantineProvider>
            <Carousel
            key={props.nome}
            width={288}
             withIndicators
             height={200}
             slideSize="33.333333%"
             slideGap="md"
             loop
             align="start"
             slidesToScroll={3}
             nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
            previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}
             >
        
            {DataProducts.map(props => 
            
            <Carousel.Slide width={288} key={props.nome}>
                <CardProduct
                    key={props.nome}
                    nome={props.nome}
                    image={props.image}
                    imageVariation={props.imageVariation}
                    price={props.price}
                    discount={props.discount}
                    /></Carousel.Slide>
                )}
        
                
        
        </Carousel>
        </MantineProvider>
        
    )
        
}

export default Slider