import './Banner.css';

const Banner = () => {
    return (
        
        <section className='Container-header'>
             
            <div className='container-beneficios' >
                <p className='container-paragrafo'>Frete grátis nas compras a partir de R$ 300</p>
            </div>
            <section className='container-banner'>
                
            <div  className='container-pesquisa'>
                <div>
                <nav className='container-nav'>
                    <a href='#' >SHOP</a>
                    <a href='#' >BEST SELLER</a>
                    <a href='#' >NEW</a>
                    <a href='#' >SOBRE</a>
                    
                </nav>
            </div>
            <div>
                <img className='container-img-marca' src='../imagens/marca-notta.png' alt='imagem da logo Notta'/>
            </div>
                <div className='container-barra-de-busca'>
                    <img className='container-img-barra-de-busca' src="../imagens/Barra de Busca.png" alt="Imagem de da barra de pesquisa" />
                    <nav className='container-nav-2'>
                    <img src="../imagens/User Dark.png" alt="" />
                    <img src="../imagens/Wishlist dark .png" alt="" />
                    <img src="../imagens/Bag Dark.png" alt="" />
                </nav>
                </div> 
                
            </div>
            </section>

           
        </section>
        
    )
       
}

export default Banner
