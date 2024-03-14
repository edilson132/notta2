import CardProduct from '../Card/CardProduct'
import './Vitrini.css'
import '../DataProducts/DataCardProducts.jsx'
import DataProducts from '../DataProducts/DataCardProducts.jsx'

const Vitrini = (props) => {
    
    return (
        <section className='container-vitrini'>

            <div className='container-vitrini-header'>

            <div className='container-vitrini-titulo'>
                <h3>new in</h3>
            </div>
                
            <div className='container-vitrini-img'>
                <img src="../imagens/leftArrow.png" alt="Seta para esquerda" />
                <img src="../imagens/rightArrow.png" alt="" />
            </div>
            
            </div>
            
            <div className='container-vitrini-cards'>
                {DataProducts.map(props => <CardProduct
                 key={props.nome}
                 nome={props.nome}
                 image={props.image}
                 imageVariation={props.imageVariation}
                 price={props.price}
                 discount={props.discount}
                />)}
                
            </div>
        </section>
    )
}

export default Vitrini

