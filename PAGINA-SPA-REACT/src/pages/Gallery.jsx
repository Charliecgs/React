import React, { useState, useEffect } from "react";
import Axios from "axios";

const Gallery = () => {

  const [character, setCharacter] = useState([]);

  const getCharacters = async () => {
    const res = await Axios.get(`https://rickandmortyapi.com/api/character/`);

    const data = res.data.results;

    setCharacter(data);
    console.log(data);
  }

  useEffect(() => {
    getCharacters();
  }, [])

  return (
    <main>
      <h1>PERSONAJES</h1>
      {character.map((charac) => 
      <figure key={charac.id} >
        <img src={charac.image} alt={charac.name}></img>
        <h2>{charac.name.toUpperCase()}</h2>
      </figure>)}
      <div>
      </div>
    </main>
  );
};

export default Gallery;
