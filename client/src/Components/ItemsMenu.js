import styles from '../Styles/ItemsMenu.module.css';
import {motion} from 'framer-motion'
export const ItemsMenu=({
    icons=[],
    onClick=()=>{}
})=>{
    
    return(<motion.div 
        className={styles.side}
        animate={{
            width:'10%',
            height:'100%'
            
        }}
    >
        <div className={styles.center}>
            {
                icons.map((icon,index)=>{
                    return(<motion.div 
                        key={index} 
                        onClick={()=>onClick(icon.item.path,icon)}
                        className={styles.icon}
                        whileHover={{scale:1.05,backgroundColor:'#051960'}}
                        whileTap={{scale:1.03}}
                    >
                        {icon.item.icon}
                        <br/>
                        {icon.item.name}
                    </motion.div>)
                })
            }
        </div>
    </motion.div>)    
}