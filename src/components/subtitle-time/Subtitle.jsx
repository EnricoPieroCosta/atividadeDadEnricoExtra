import styles from "./subtitle.module.css"
import Time from "../time/Time"
import left from '../../assets/setaesquerda.png'
import right from '../../assets/setadireita.png'

function Subtitle({title, desc}){
    return (
        <div className={styles.subtitle}>
            <p className={styles.text}>{title}</p>
            <div className={styles.second}>
                <div className={styles.doubleelements}>
                <h1 className={styles.text2}>{desc}</h1>
                <Time></Time>
                </div>
                <div>
                    <img src={left} alt="seta para direita" />
                    <img src={right} alt="seta para direita" />
                </div>
            </div>
        </div>
    )
}

export default Subtitle;