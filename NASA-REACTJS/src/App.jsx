import React, { useState, useEffect } from 'react';
import './App.css'
import Figure from './components/Figure';
import axios from "axios";

function App() {

  const today = new Date(Date.now()).toISOString().slice(0,10);

  const [apod, setApod] = useState({});

  const [date, setDate] = useState(today);

  const nasaUrl = "https://api.nasa.gov/";

  const nasaApiKey = "OeUIFik4Zbvp60SabhvCjd279lP0mUzV9r8EjzyN";

  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${nasaUrl}planetary/apod?date=${date}&api_key=${nasaApiKey}`
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);

  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  }

  return (
    <div className="App">
  <h1>Foto del dia de la NASA</h1>
  <input type="date" id="photo-date" onChange={handleInput} />
    {date > today ? (<h2>Por favor escoge otro dia</h2>) : <Figure data={apod} />}

    </div>
  )
}

export default App
