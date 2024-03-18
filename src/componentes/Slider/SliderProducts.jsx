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
        <MantineProvider width={100} >
            <Carousel
             key={props.nome}
             width={100}
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
                    /></CarouselSlide>
                )}
        
                
        
        </Carousel>
        </MantineProvider>
        
    )
        
}

export default Slider