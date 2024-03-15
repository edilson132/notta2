import React from "react"
import { Carousel } from '@mantine/carousel';
import DataProducts from "../DataProducts/DataCardProducts";
import CardProduct from "../Card/CardProduct";




const Slider = () => {
    return (
        <Carousel slideSize="70%" height={200} slideGap="xs" controlsOffset="xs" controlSize={15} loop>
            <Carousel.Slide>
                {DataProducts.map(props => <CardProduct
                 key={props.nome}
                 nome={props.nome}
                 image={props.image}
                 imageVariation={props.imageVariation}
                 price={props.price}
                 discount={props.discount}
                />)}
            </Carousel.Slide>
            
        </Carousel>
    )
        
}

export default Slider