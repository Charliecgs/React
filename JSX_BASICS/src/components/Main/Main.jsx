import "./Main.css";

const Saludo = ({number}) => {

    const numeroSaludo = number >= 6 && number <= 12 ? "Buenos días" : number >=13 && number <=19 ? "Buenas tardes" : "Buenas noches" ;

    return <h1>{numeroSaludo}</h1>
}

export default Saludo;