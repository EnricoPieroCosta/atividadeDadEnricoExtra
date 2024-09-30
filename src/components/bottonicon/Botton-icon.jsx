import style from './Botton-icon.module.css'
import React, { useState } from 'react';

function BottonIcon({srcIcon, desc}){

    const [color, setColor] = useState('black')
    const [background, setBackground] = useState('white')
    
    const mouseEnter = () => {
        setBackground('#DB4444')
        setColor('white')
    }

    const mouseLeave = () => {
        setBackground('white')
        setColor('black')
    }
    return(
        <div className={style.botton} onMouseLeave={mouseLeave} onMouseEnter={mouseEnter} style={{backgroundColor: background, color:color}}>
            <img src={srcIcon}></img>
            <p>{desc}</p>
        </div>
    )
}

export default BottonIcon