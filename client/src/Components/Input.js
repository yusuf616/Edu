import styles from '../Styles/Input.module.css'
import {motion} from 'framer-motion'
import { useState } from 'react';


export const Input=({
    label,
    name,
    type,
    defaultValue,
    min,
    max,
    step,
    onChange,
    style,

})=>{
    const [value,setValue]=useState(defaultValue);
    return(<motion.div  
        style={style}
        className={styles.rangeinputdiv}
        whileHover={{scale:1.02,borderColor:'rgb(36, 248, 255)',color:'rgb(36, 248, 255)'}}
    >
        {label}:
        <input 
            className={styles.rangeinput}
            type={type} 
            defaultValue={value} 
            min={min} 
            max={max} 
            step={step} 
            onChange={(e)=>{
                setValue(e.target.value);
                onChange(parseFloat(e.target.value),name);
            }}    
        >
            
        </input>
        :{value}
    </motion.div>)
}
