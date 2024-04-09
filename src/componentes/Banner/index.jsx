import { useState } from "react";
import CardBanner from "../CardBanner/Cardbanner.jsx";
import DataBanner from "../DataBanner/DataBanner";
import "./Banner.css";
import Slider from "react-slick";
import { useEffect } from "react";

const Banner = () => {
  const [scrolled, setScroulled] = useState(false);

  useEffect(() => {
    const handleScroull = () => {
      if (window.scrollY > 0) {
        setScroulled(true);
        console.log("hello");
      } else {
        setScroulled(false);
        console.log("hello2");
      }
    };

    window.addEventListener("scroll", handleScroull);

    return () => {
      window.removeEventListener("scroll", handleScroull);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
  };
  return (
    <section className="container-header">
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      <header className={scrolled ? "scrolled" : ""}>
        <div className="container-beneficios">
          <p>Frete grátis nas compras a partir de R$ 300</p>
        </div>

        <div className="container-pesquisa">
          <div className="container-button-pesquisa">
            <button>
              ,<img src="../imagens/buttonMenu.png" alt="" />
            </button>
          </div>
          <div>
            <nav className="container-nav">
              <a href="https">SHOP</a>
              <a href="https">BEST SELLER</a>
              <a href="https">NEW</a>
              <a href="https">SOBRE</a>
            </nav>
          </div>
          <div>
            <img
              className="container-img-marca"
              src="../imagens/marca-notta.png"
              alt="imagem da logo Notta"
            />
          </div>
          <div className="container-barra-de-busca">
            <div className="container-barra-de-busca-p1">
              <img
                src="../imagens/search-outline 1.png"
                alt="Imagem da barra de pesquisa"
              />
              <p>buscar</p>
            </div>

            <nav className="container-nav-2">
              <img
                className="container-img-1"
                src="../imagens/User Dark.png"
                alt="Icone de um boneco"
              />
              <img
                className="container-img-2"
                src="../imagens/Wishlist dark .png"
                alt="Icone de um coração"
              />
              <img
                className="container-img-3"
                src="../imagens/imagemCadeado.png"
                alt="Icone de cadeado"
              />
            </nav>
          </div>
        </div>
      </header>

      <section className="container-banner">
        <div className="container-banner-desktop">
          <Slider {...settings}>
            {DataBanner.map((props) => (
              <CardBanner key={props.nome} image={props.image} />
            ))}
          </Slider>
        </div>
      </section>
    </section>
  );
};

export default Banner;
