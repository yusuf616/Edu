import styles from '../Styles/Box.module.css';
import {motion} from 'framer-motion';

export const Box=({children,style,x=0,y=0,width=120,height=80,process=null,onClick=()=>{},})=>{
    return(<motion.div
        onClick={()=>onClick(process)} 
        className={styles.box}
        style={style}
        animate={{x:x,y:y,width:width,height:height}}
        whileHover={{scale:1.05}}
        whileTap={{scale:1.02}}
    >
        <button className={styles.button}>{children}</button>
    </motion.div>)
}