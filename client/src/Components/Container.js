import { useNavigate } from 'react-router-dom';
import styles from '../Styles/Container.module.css';
import {motion} from 'framer-motion';
import {ImCancelCircle} from 'react-icons/im';
import { useRef, useState } from 'react';

export const Container=({
    children,
    width='100%',
    height='100%',
    style=null,
    back=false
})=>{
    const navigate=useNavigate();
    const intervalRef=useRef();
    const [scaleState,setScaleState]=useState({
        width:width,
        height:height,
        opacity:1
    })
    const handleClick=()=>{
        setScaleState({
            width:0,
            height:0,
            opacity:0
        })
        intervalRef.current=setInterval(()=>{
            navigate(-1)
            clearInterval(intervalRef.current);
        },300);    
    }

    return(<motion.div 
        className={styles.container}
        animate={{
            width:scaleState.width,
            height:scaleState.height,
            opacity:scaleState.opacity
        }}
        
        style={style}
    >
        
        {children}
        {back?<BackBox
            onClick={handleClick}
        />:<></>}
    </motion.div>);
}



const BackBox=({
    onClick=()=>{}
})=>{
    return (<div 
        className={styles.backbox}
    >   
        <motion.div
            onClick={onClick}
            whileHover={{scale:1.05}}
        >
            <ImCancelCircle size={'100%'}/>
        </motion.div>
    </div>);
}