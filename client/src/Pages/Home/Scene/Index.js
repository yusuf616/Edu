import {Canvas} from '@react-three/fiber'
import {OrbitControls} from  '@react-three/drei';
import {XR,Controllers,Hands,VRButton} from '@react-three/xr'
import * as Components from '../../../Components/Exports';
import { useLocation } from 'react-router-dom';
import * as Json from '../jsons/Exports';
import { Scene } from './Scene';
import { Physics } from '@react-three/cannon';
import * as Utils from './Utils/Exports'
import { useEffect, useState,useRef } from 'react';
import Hosts  from '../../../Hosts.json';

export const Index=()=>{
    const location =useLocation();
    const propRef=useRef({
        X:[],
        Xmin:0,
        Xmax:0

    });    
    const names=Json.ListNames[location.state.type];
    const [itemsMenu,setItemsMenu]=useState([]);
    const [items,setItems]=useState([]);
    const [prop,setProp]=useState(null);
    
    const GetInfo=async()=>{
        const a=await fetch(`${Hosts.server}${location.pathname}/select?id=${location.state.item[`id${location.state.type}`]}`)
        const resulte=await a.json();
        console.log(resulte);
        if(resulte.status==='success'){
            if(resulte.data.length>0){
                const a=resulte.data[0];
                propRef.current.Xmax=a.Xmax;
                propRef.current.Xmin=a.Xmin;
                propRef.current.X=a.X.split(',').map(i=>parseFloat(i));
                
                const updatedItems = [...items,Utils.Math.MathItems['function']];
                setItems(updatedItems);
            }
            
            
        }

    }

    useEffect(()=>{
        GetInfo();
        
        const items=Json.ItemsMenuIcons;
        const array=[];
        items.forEach(item=>{
            console.log(item)
            array.push({
                item:item,
                flage:true,
            })
        });
        setItemsMenu(array);  
    },[])


   
    const Save=async()=>{
        const supprop={
            X:`${propRef.current.X.map(x=>x)}`,
            Xmax:propRef.current.Xmax,
            Xmin:propRef.current.Xmin,
            idscenes:location.state.item[`id${location.state.type}`]
        }
        const resulte=await Utils.Save({
            listNames:Json.ListNamesOutID['function'],
            path:`${location.pathname}/save`,
            data:supprop
        });
        console.log(resulte);
    }


    const handleClick=(event,item)=>{
        if(event==='prop'){
            if(prop===null)
                setProp(<Components.Prop ref={propRef}/>)
            else
                setProp(null);
        }else if(event==='save'){
            Save();
        }else if(item.flage){
            const updatedItems = [...items,Utils.Math.MathItems[event]];
            setItems(updatedItems);
            item.flage=false;
        }
    }

    return(<Components.Container back={true}>
        <Components.ItemsMenu icons={itemsMenu} onClick={handleClick}/>
        <Components.Title names={names} item={location.state.item}/>
        {prop}
        <Canvas>
            <color attach={'background'} args={['#caf0f8']}/>
            <OrbitControls/>
            <XR>   
                <Controllers/>
                <Hands/> 
                <Physics>
                    <Scene>
                        {items.map((item,i)=>{
                            const Item=item;
                            return(<Item key={i} onClick={handleClick} propRef={propRef} />)
                        })}
                    </Scene>
                </Physics>
            </XR>
        </Canvas>
        <VRButton/>
       
    </Components.Container>)
}