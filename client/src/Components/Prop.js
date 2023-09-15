import styles from '../Styles/Prop.module.css'
import {motion} from 'framer-motion';
import { forwardRef, useState,useEffect } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { XInput } from './XInput';
export const Prop=forwardRef(({

},ref)=>{

    const [X,setX]=useState(ref.current.X);
    useEffect(()=>{
        ref.current.X=X;
    },[X])

    const handleChange=(value,name)=>{
        
        // console.log(name);
        if(name!=='X'){
            ref.current[name]=value;
        }
      
    }
    return(<motion.div 
        className={styles.prop}
        animate={{width:'60%',height:'30%'}}
    >
        <div>
            <Button 
                label={'+'}
                style={{display:'inline-block'}}
                onClick={()=>{
                    setX([...X,1]);
                }}
            />
            <Button
                label={'-'}
                style={{display:'inline-block'}}
                onClick={()=>{
                    const a=X;
                    console.log(a);
                    a.shift();
                    console.log(a)
                    setX([...a]);
                }}
            />
            {
                X.map((x,i)=><XInput 
                    lable={`+X^${X.length-i-1}*`}
                    defaultValue={x}
                    key={X.length-i-1}
                    onChange={(e)=>{
                        const a=X;
                        setX([]);
                        a[i]=e;
                        setX(a);
                        
                        // console.log(X)
                    }}
                />)
            }   
        </div>
        <div className={styles.rangeinputs}>
            <Input
                label={'min'}
                name={'Xmin'} 
                type='range' 
                defaultValue={ref.current.Xmin} 
                min={-10} 
                max={10} 
                step={0.01} 
                onChange={handleChange}    
            ></Input>
            <Input 
                label={'max'}
                name={'Xmax'} 
                type='range' 
                defaultValue={ref.current.Xmax} 
                min={-10} 
                max={10} 
                step={0.01} 
                onChange={handleChange}    
            ></Input>
        </div>
    </motion.div>)
});



