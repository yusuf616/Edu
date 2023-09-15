import {motion} from  'framer-motion'
import { Box } from './Box'
export const ListBoxes=({
    items=[],
    names=[],
    children,
    onClick=()=>{},
    type=null
})=>{
    return(<div>
        {
            items.map((item,i)=>(
                <motion.div 
                    onClick={()=>onClick({item:item,type})}
                    key={i} 
                    style={{display:'inline'}}
                >
                    <Box>
                        {names.map((name,i)=>(
                            <div 
                                style={{
                                    display:'inline'
                                }}
                                key={i}
                            >
                                {item[name]}
                            </div>
                        ))}
                    </Box>
                </motion.div>
            ))
        }
        {children}
    </div>)
}