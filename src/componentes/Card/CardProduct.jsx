import './CardProduct.css'
import '../DataProducts/DataCardProducts.jsx'

const CardProduct = (props, image) => {
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
                <p>R${props.price}</p>
            </div>

        </section>
    )
        
        
}

export default CardProduct