import Titulo from "../components/Title"
import SubTitulo from "../components/SubTitle"
import Imagen from "../components/Image"
import Parrafo from "../components/Paragraph"

const Index = () => {
    const title = "The last of us";
    const subTitle = "El mejor juego de la historia";
    const src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1675874705/tblnWbNmMDbYJUAu8T4eYWWh_agnuxu.webp";
    const parrafo = "Copyright juegazo";

    return <div>
        <header>
            <Titulo textTitle={title}/>
        </header>
        <main>
        <SubTitulo textSubtitle={subTitle}/>
        <Imagen source={src} width1="10%" />
        </main>
        <footer>
            <Parrafo textParagraph={parrafo} />
        </footer>
    </div>
}

export default Index;