import style from "./Time.module.css"
import React, { useState, useEffect } from 'react';
function Time(){
  const [time, setTime] = useState(259200);

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time]);

  const montarCronometro = (segundos) => {
    const dias = Math.floor(segundos / (3600 * 24));
    const hora = Math.floor((segundos % (3600 * 24)) / 3600);
    const minuto = Math.floor((segundos % 3600) / 60);
    const segundo = segundos % 60;

    return { dias, hora, minuto, segundo };
  };

  const { dias, hora, minuto, segundo } = montarCronometro(time);
    return(
        <div className={style.times}>
            <div>
                <p className={style.title}>Days</p>
                <h1 className={style.number}>{dias}</h1>
            </div>
            <p className={style.twopoints}>:</p>
            <div>
                <p className={style.title}>Hours</p>
                <h1 className={style.number}>{hora}</h1>
            </div>
            <p className={style.twopoints}>:</p>
            <div>
                <p className={style.title}>Minutes</p>
                <h1 className={style.number}>{minuto}</h1>
            </div>
            <p className={style.twopoints}>:</p>
            <div>
                <p className={style.title}>Seconds</p>
                <h1 className={style.number}>{segundo}</h1>
            </div>
        </div>
    )
}
export default Time;