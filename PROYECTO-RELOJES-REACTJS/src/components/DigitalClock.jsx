import React, {useState, useEffect} from "react";

const DigitalClock = () => {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000)
    }, [clockState]);
    
    return <div>
        <h2>{clockState}</h2>
    </div>
}

export default DigitalClock;