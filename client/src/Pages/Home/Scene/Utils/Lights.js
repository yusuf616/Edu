export const Lights=()=>{
    return(<>
        <spotLight position={[12,12,17]} lookAt={[0,0,0]} intensity={.5}/>
        <spotLight position={[-12,-12,-17]} lookAt={[0,0,0]}/>
        <ambientLight intensity={0.5}/>
    </>)
}