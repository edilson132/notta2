import CardProduct from '../Card/CardProduct'
import './Vitrini.css'
import '../DataProducts/DataCardProducts.jsx'
import DataProducts from '../DataProducts/DataCardProducts.jsx'

const Vitrini = (props) => {
    
    return (
        <section>
            <h3>new in</h3>
            <div className='container-vitrini-cards'>
                {DataProducts.map(props => <CardProduct
                 key={props.nome}
                 nome={props.nome}
                 image={props.image}
                 price={props.price}
                 discount={props.discount}
                />)}
                
            </div>
        </section>
    )
}

export default Vitrini

