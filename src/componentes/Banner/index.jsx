import './Banner.css';

const Banner = () => {
    return (
        
        <section className='Container-header'>
            
          <header >
            <div className='container-beneficios' >
                <p className='container-paragrafo'>Frete grátis nas compras a partir de R$ 300</p>
            </div>
                
            <div  className='container-pesquisa'>
                <div>
                <nav className='container-nav'>
                    <a href='https' >SHOP</a>
                    <a href='https' >BEST SELLER</a>
                    <a href='https' >NEW</a>
                    <a href='https' >SOBRE</a>
                    
                </nav>
            </div>
            <div>
                <img className='container-img-marca' src='../imagens/marca-notta.png' alt='imagem da logo Notta'/>
            </div>
                <div className='container-barra-de-busca'>
                    <img className='container-img-barra-de-busca' src="../imagens/Barra de Busca.png" alt="Imagem da barra de pesquisa" />
                    <nav className='container-nav-2'>
                    <img src="../imagens/User Dark.png" alt="Icone de um boneco" />
                    <img src="../imagens/Wishlist dark .png" alt="Icone de um coração" />
                    <img src="../imagens/Bag Dark.png" alt="Icone de cadeado" />
                </nav>
                </div> 
                
            </div>
          </header>
            
            <section className='container-banner'>
               <img src="../imagens/Imagem banner.png" alt="Imagem do banner" /> 
            </section>
            
        </section>
        
    )
       
}

export default Banner
