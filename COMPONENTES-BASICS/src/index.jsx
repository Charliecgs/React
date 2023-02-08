import './App.css'
import Titulo from './components/Title';
import SubTitulo from './components/SubTitle';
import Imagen from './components/Image';
import Parrafo from './components/Paragraph';

const Index = () => {
    return <div className='all'>
        <header>
            <Titulo />
        </header>
        <main>
        <SubTitulo />
        <Imagen />
        </main>
        <footer>
        <Parrafo />
        </footer>
    </div>
}

export default Index;