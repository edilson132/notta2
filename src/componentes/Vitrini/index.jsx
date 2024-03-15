
import './Vitrini.css'
import '../DataProducts/DataCardProducts.jsx'

import { useRef } from 'react'

import Slider from '../Slider/SliderProducts.jsx'

const Vitrini = () => {

    const carousel = useRef(null)

    // const passLeft = (e) => {
    //     e.preventDefault()
    //     carousel.current.scrollLeft -= carousel.current.offsetWidth

    // }

    // const passRight = (e) => {
    //     e.preventDefault()
    //     carousel.current.scrollLeft += carousel.current.offsetWidth
    // }
    
    
    return (
        <section className='container-vitrini'>

            <div className='container-vitrini-header'>

            <div className='container-vitrini-titulo'>
                <h3>new in</h3>
            </div>
                
            <div className='container-vitrini-buttons'>
                <button><img src="../imagens/leftArrow.png" alt="Seta para esquerda" /></button>
                <button><img src="../imagens/rightArrow.png" alt="Seta para direita" /></button>
                
            </div>
            
            </div>
            
            <div className='carousel' >
                <div className='container-vitrini-cards' ref={carousel}>
                <Slider/>
                
            </div>
            </div>
            
        </section>
    )
}

export default Vitrini

