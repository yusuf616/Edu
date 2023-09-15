import * as THREE from 'three'
import { useRef } from 'react'
import {usePlane} from '@react-three/cannon'
export const Plane=(props)=>{
    const [ref]=usePlane(()=>({
        mass:0,
        rotation:[-Math.PI/2,0,0],
        ...props
    }),useRef());
    return(<group>
        <primitive  object={new THREE.GridHelper(25,25)}/>
        <mesh ref={ref} receiveShadow>
            <planeGeometry args={[25,25]}/>
            <meshStandardMaterial
                side={2}
                color={'#ff0'}
            />
        </mesh>
    </group>);
}