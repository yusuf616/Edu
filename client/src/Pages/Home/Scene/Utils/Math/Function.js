import * as THREE from 'three'
import { MeshLineGeometry, MeshLineMaterial, raycast } from 'meshline'
import { useFrame } from "@react-three/fiber"
import { Render } from "./Render"

import { useRef,useEffect, useState } from "react"


const Line=({
    X=[],
    Xmin=0,
    Xmax=0,
    propRef={
        current:{
            X:[],
            Xmin:0,
            Xmax:0
        }
    },
   
})=>{
    const ref=useRef();
    const myPropRef=useRef(null);
    const intervalRef=useRef();
    console.log(X);
    
    const DrawLine=()=>{
        var points=[];
        for (let x_=propRef.current.Xmin;x_<propRef.current.Xmax+.1;x_+=.1){
            const x=x_
            let y=0;
            for(let i=0;i<propRef.current.X.length;i++){
                if(i===propRef.current.X.length-1){
                    y+=propRef.current.X[i]
                }else{
                    let PoN=propRef.current.X[i]<0 && (propRef.current.X.length-1-i)%2===0?-1:1
                    y+=PoN*Math.pow(propRef.current.X[i]*x,propRef.current.X.length-1-i);
                }
               
            } 
          
            points.push([x*10,y*10,0]);
        }
    
        ref.current.geometry=new MeshLineGeometry();
        ref.current.geometry.setPoints(points);
        ref.current.material=new MeshLineMaterial({color:'red',lineWidth:0.01});
    }

    useEffect(()=>{
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            DrawLine();
        },100);

        return ()=>clearInterval(intervalRef.current);
    },[]);

    return(<mesh ref={ref} scale={[0.1,0.1,0.1]}></mesh>)
}




export const Function=({
    X=[],
    Xmin=0,
    Xmax=0,
    propRef={
        current:{
            X:[],
            Xmin:0,
            Xmax:0
        }
    },
    onClick=()=>{}
})=>{
    const groupRef=useRef()
    const meshRef=useRef();
    useFrame((delta)=>{
        
        let absAverage=(Math.abs(propRef.current.Xmax)+Math.abs(propRef.current.Xmin))/2;
        let centerPoint=(propRef.current.Xmax+propRef.current.Xmin)/2;
        let date=Math.sin(delta.clock.elapsedTime);
        
        const x=date*absAverage+centerPoint;

        let y=0;
        for(let i=0;i<propRef.current.X.length;i++){
            if(i===propRef.current.X.length-1){
                y+=propRef.current.X[i]
            }else{
                let PoN=propRef.current.X[i]<0 && (propRef.current.X.length-1-i)%2===0?-1:1
                y+=PoN*Math.pow(propRef.current.X[i]*x,propRef.current.X.length-1-i);
            }
        }
        
        meshRef.current.position.x=x;
        meshRef.current.position.y=y;

    });

    return(<group ref={groupRef}>
        
        <Render onClick={onClick}>
            <mesh  scale={[0.1,0.1,0.1]}>
                <mesh rotation={[Math.PI/2,0,0]}><primitive object={new THREE.GridHelper(20,20,'#000','#559')}/></mesh> 
                <Line  propRef={propRef}/>
                <mesh ref={meshRef}  scale={[0.2,0.2,0.2]}>
                    <sphereGeometry></sphereGeometry>
                    <meshStandardMaterial color="blue"></meshStandardMaterial>
                </mesh>
            </mesh>
        </Render>
    </group>)
}


