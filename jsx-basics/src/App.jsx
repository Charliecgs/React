import "./App.css";
import Saludo from "./components/Main/Main";
import Change from "./components/Main/ChangeCharacter";
import { useState } from "react";

const App = () => {
  const numero = 7;

  const numeros = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  let characters = [
    {
      id: 1,
      name: "Daredevil",
      company: "Marvel",
    },
    {
      id: 2,
      name: "Batman",
      company: "DC",
    },
    {
      id: 3,
      name: "Namor",
      company: "Marvel",
    },
  ];

  const characterName = "Carlos";

  const mappedCharacters = characters.map((character) => ({
    id: character.id,
    name: characterName,
    company: character.company,
  }));

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="App">
      {/* Ejercicio 1 */}
      <Saludo number={numero} />
      {numeros.map((num) => (
        <Saludo number={num} key={num} />
      ))}

      {/* Ejercicio 2 */}
      {mappedCharacters.map((characters) => (
        <Change character={characters} key={characters.id} />
      ))}

      {/* Ejercicio 3 */}
      <button onClick={() => setLoaded(true)}>True</button>
      {loaded ? "Es true" : "Es false"}
      <button onClick={() => setLoaded(false)}>False</button>
      {loaded ? "Es true" : "Es false"}
    </div>  
  );
};

export default App;
