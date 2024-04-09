import Banner from "../componentes/Banner";
import Banner2 from "../componentes/Banner2";
import Banner3 from "../componentes/Banner3/";
import Banner4 from "../componentes/Banner4";
import BannerMobile from "../componentes/BannerMobile";
import Cadastro from "../componentes/Cadastro/Cadastro";
import Categorys from "../componentes/Category";
import Footer from "../componentes/Footer/Footer";
import VitriniBenefios from "../componentes/VitriniBeneficios/VitriniBeneficios";
import Vitrini from "../componentes/VitriniProducts/Vitrini";
import Vitrini2 from "../componentes/VitriniProducts/Vitrini2";
import VitriniSocial from "../componentes/VitriniSocial/VitriniSocial";

const Home = () => {
  return (
    <div>
      <Banner />
      <BannerMobile />
      <Categorys />
      <Vitrini />
      <Banner2 />
      <Banner3 />
      <Vitrini2 />
      <Banner4 />
      <VitriniSocial />
      <VitriniBenefios />
      <Cadastro />
      <Footer />
    </div>
  );
};

export default Home;
