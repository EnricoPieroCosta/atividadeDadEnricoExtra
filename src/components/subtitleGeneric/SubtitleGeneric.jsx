import styles from './subtitleGeneric.module.css'

function SubtitleGeneric({title,subtitle}){
    return (
        <div className={styles.subtitle}>
            <p className={styles.text}>{subtitle}</p>
            <div className={styles.second}>
                <div className={styles.doubleelements}>
                <h1 className={styles.text2}>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default SubtitleGeneric;