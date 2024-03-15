import './CardProduct.css'
import '../DataProducts/DataCardProducts.jsx'
import '@mantine/carousel/styles.css';
// import Slider from '../Slider/Slider.js'


const CardProduct = (props) => {
    // const settings = {
    //     spaceBetwenn:50,
    //     slidesPerview:3,
    // }
    // const ImgTheBottom = props.image
    return (
            
            <section className="container-card-header">
                    <div className="container-card-discount">
                        <p>{props.discount}% OFF</p>
                        
                    </div>
            
                <div className="container-card-img" >
                    <img src={props.image} alt="" />
                </div>

                <div className="container-card-footer">
                    <p>{props.nome}</p>
                    <p className='container-card-price'>R${props.price}</p>
                    <img src={props.imageVariation} alt="Icone de variação de cor" />
                </div>           

            {/* <Slider settings={settings}>
                swiperSlide
            </Slider> */}

        </section>
    )
        

        
}

export default CardProduct