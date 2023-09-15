import styles from '../Styles/Button.module.css';

import {motion} from 'framer-motion';


export const Button=({
    style,
    label,
    onClick=()=>{}
})=>{
    return(<motion.div  
        style={style}
        className={styles.buttondiv}
        whileHover={{scale:1.02,borderColor:'rgb(36, 248, 255)',color:'rgb(36, 248, 255)'}}
        onClick={onClick}
    >
        <button className={styles.button}>
            {label}
        </button>
        
    </motion.div>)
}