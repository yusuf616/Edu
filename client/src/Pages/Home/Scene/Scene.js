import {useRef} from 'react'
import * as Utils from './Utils/Exports';
export const Scene=({
    position=[0,0,0],
    rotation=[0,0,0],
    scale=[1,1,1],
    children
},props)=>{
    const groupRef=useRef();
    return(<group 
        ref={groupRef}
        position={position}
        scale={scale}
        rotation={rotation}
        {...props}
    >
        {children}
        <Utils.Lights/>
        <Utils.Plane/>
        
    </group>)
}