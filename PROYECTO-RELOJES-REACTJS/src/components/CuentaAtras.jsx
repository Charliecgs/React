import React, {useEffect, useState} from "react";

const CuentaAtras = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
      let cuentaAtrasFecha = new Date("Jun 17, 2023, 00:00:00").getTime();
      let ahora = setInterval(() => {
        let now = new Date().getTime();
        let distance = cuentaAtrasFecha - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
      }, 1000)
    }, [])
    
    
    return <div>{time} </div>
}

export default CuentaAtras;