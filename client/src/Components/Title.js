import styles from '../Styles/Title.module.css';

export const Title=({
    names=[],
    item
})=>{
    return(<div className={styles.title}>
            <button className={styles.box}>
                {names.map((name,i)=>(
                    <div 
                        key={i}
                        style={{display:'inline'}}
                    >
                        {item[name]} 
                    </div>
                ))}
            </button>
        </div>)
}