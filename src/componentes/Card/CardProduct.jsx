import './CardProduct.css'
import '../DataProducts/DataCardProducts.jsx'

const CardProduct = (props) => {
    const ImgTheBottom = {backgroundImage:`url{props.image}`}
    return (
        <section className="container-card-header">
            <div className="container-card-img" style={ImgTheBottom}>
                <div className="container-card-desconto">
                    <p>{props.desconto}% OFF</p>
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