import styles from '../Styles/InputForm.module.css'
import {motion} from 'framer-motion'

export const InputForm =({
    inputs=[],
    onSubmit=()=>{},
    submitTitle='Giriş Yap',
    title='Giriş Form',
    children,
    style=null
})=>{
    return(<motion.div 
        className={styles.form} style={style}
        animate={{opacity:1,height:inputs.length*50+170}}
    >
        <h1>{title}</h1>
        
        <form style={{padding:'20px'}} onSubmit={onSubmit}>
            {children}
            {inputs.map((input,index)=>{
                return<motion.input
                    animate={{y:50*index}}
                    key={index} 
                    className={styles.input}  
                    type={input.type}
                    placeholder={input.placeholder} 
                    name={input.name}
                    accept={input.accept?input.accept:null}               
                />
                })
            }
            <motion.button  
                className={styles.button} 
                type={'submit'}
                animate={{y:50*inputs.length}}
            >
                {submitTitle}
            </motion.button>
        </form>
    </motion.div>);
}