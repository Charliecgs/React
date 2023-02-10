import React, {useState, useEffect} from "react";

const Cronometro = () => {

    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval = null;

        if(timerOn){
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    }, [timerOn])

    return <div>
    <h2>{time}</h2>
    <button onClick={() => setTimerOn(true)}>Start</button>
    <button onClick={() => setTimerOn(false)}>Stop</button>
    <button onClick={() => setTimerOn(true)}>Resume</button>
    <button onClick={() => setTime(0)}>Reset</button>
    </div>
}

export default Cronometro;