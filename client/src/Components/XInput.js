import styles from '../Styles/XInput.module.css';
import { useState } from "react";
import {motion} from 'framer-motion'
export const XInput=({
    lable,
    defaultValue,
    onChange=()=>{}
})=>{
    const [value,setValue]=useState(defaultValue);
    return(<>
        <p className={styles.spam}>{lable}</p>
        <motion.input
            className={styles.xinput} 
            step={0.01}
            type='number'
            onChange={(e)=>{
                setValue(parseFloat(e.target.value));
                onChange(parseFloat(e.target.value));
            }}
            defaultValue={value}
            value={value}
            whileFocus={{scale:1.01,color: 'rgb(38, 237, 244)'}}
            whileHover={{scale:1.01,color: 'rgb(38, 237, 244)'}}
        >

        </motion.input>
    </>);
}