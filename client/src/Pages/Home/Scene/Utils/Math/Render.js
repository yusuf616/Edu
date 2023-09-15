import { useEffect, useRef } from "react"
import TWEEN from '@tweenjs/tween.js'
export const Render=({
    children,
    position=[0,0,0],
    rotation=[0,0,0],
    scale=[1,1,1],
    onClick=()=>{}

})=>{
    const ref=useRef();
    const renderMeshRef=useRef();
    const closeRef=useRef(true);
    const intervalRef=useRef();

    useEffect(()=>{
        ref.current.position.y=position[1]+3/2
    },[]);
    
    const open=()=>{
        
        if(renderMeshRef.current){
            new TWEEN.Tween(renderMeshRef.current.scale)
            .to({
                x:1,
                z:1
            },1000)
            .easing(TWEEN.Easing.Linear.None)
            .start();
            intervalRef.current=setInterval(()=>{
                TWEEN.update();
                
                if(renderMeshRef.current&&renderMeshRef.current.scale&&renderMeshRef.current.scale.x===1){
                    closeRef.current=!closeRef.current
                    clearInterval(intervalRef.current)
                    intervalRef.current=null;
                }
            },1000/60);
        } 
    }

    const close=()=>{
        
        if(renderMeshRef.current){
            new TWEEN.Tween(renderMeshRef.current.scale)
            .to({
                x:0,
                z:0
            },1000)
            .easing(TWEEN.Easing.Linear.None)
            .start();
            intervalRef.current=setInterval(()=>{
                TWEEN.update();
                
                if(renderMeshRef.current&&renderMeshRef.current.scale&&renderMeshRef.current.scale.x===0){
                    clearInterval(intervalRef.current)
                    intervalRef.current=null;
                    closeRef.current=!closeRef.current;
                }
            },1000/60);
        } 
    }


    return(<group ref={ref} position={position} rotation={rotation}scale={scale} >
        <mesh 
            onClick={()=>{closeRef.current?close():open();}}
            position={[0,1.75,0]}
        >
            <cylinderGeometry args={[1,1,0.5,4]}/>
            <meshBasicMaterial transparent={true} />
        </mesh>
        <mesh ref={renderMeshRef} scale={[0,1,0]} onClick={()=>onClick('prop')}>
            <cylinderGeometry args={[1,3,3,4]}/>
            <meshBasicMaterial opacity={.4} transparent={true} />
            {children}
        </mesh>
    
    </group>)
}