import Titulo from "../components/Title";
import SubTitulo from "../components/SubTitle";
import Imagen from "../components/Image";
import Parrafo from "../components/Paragraph";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Index = () => {
  const title = "The last of us";
  const subTitle = "El mejor juego de la historia";
  const src =
    "https://res.cloudinary.com/dqoiir5ii/image/upload/v1675874705/tblnWbNmMDbYJUAu8T4eYWWh_agnuxu.webp";
  const parrafo = "Copyright juegazo";
  const alt = "The last of us imagen";

  return (
    <div>
      <Header>
        <Titulo textTitle={title} />
      </Header>
      <Main>
      <SubTitulo textSubtitle={subTitle} />
      <Imagen source={src} width1="1000px" alt={alt} height="800px" />
      </Main>
      <Footer>
      <Parrafo textParagraph={parrafo} />
      </Footer>
    </div>
  );
};

export default Index;
