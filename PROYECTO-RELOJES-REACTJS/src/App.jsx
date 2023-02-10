import './App.css'
import DigitalClock from './components/DigitalClock';
import CuentaAtras from './components/CuentaAtras';
import Cronometro from './components/Cronometro';

function App() {
  return (
    <div className="App">
      <DigitalClock></DigitalClock>
      <CuentaAtras></CuentaAtras>
      <Cronometro></Cronometro>
    </div>
  )
}

export default App
