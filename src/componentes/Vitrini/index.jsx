import CardProduct from '../Card/CardProduct'
import './Vitrini.css'
import '../DataProducts/DataCardProducts.jsx'
import DataProducts from '../DataProducts/DataCardProducts.jsx'

const Vitrini = () => {


    const passLeft = (e) => {
        e.preventDefault()

    }

    const passRight = (e) => {
        e.preventDefault()
    }
    
    
    return (
        <section className='container-vitrini'>

            <div className='container-vitrini-header'>

            <div className='container-vitrini-titulo'>
                <h3>new in</h3>
            </div>
                
            <div className='container-vitrini-buttons'>
                <button onClick={passLeft}><img src="../imagens/leftArrow.png" alt="Seta para esquerda" /></button>
                <button onClick={passRight}><img src="../imagens/rightArrow.png" alt="Seta para direita" /></button>
                
            </div>
            
            </div>
            
            <div className='carousel'>
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
            </div>
            
        </section>
    )
}

export default Vitrini

