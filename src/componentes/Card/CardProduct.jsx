import './CardProduct.css'
import '../DataProducts/DataCardProducts.jsx'

const CardProduct = (props) => {
    // const ImgTheBottom = props.image
    return (
        <section className="container-card-header">
            <div className="container-card-img" >
                <div className="container-card-desconto">
                    <p>{props.desconto}% OFF</p>
                    <img src={`../DataProDucts/DataCardProducts.jsx/${props.image}`} alt="" />
                </div>
            </div>
            <div className="container-card-footer">
                <p>{props.nome}</p>
                <p>R${props.price}</p>
            </div>

        </section>
    )
        
        
}

export default CardProduct