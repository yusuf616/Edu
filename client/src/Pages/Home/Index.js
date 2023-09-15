import {useNavigate,Outlet, useLocation} from 'react-router-dom';
import * as Components from '../../Components/Exports';
import {MdOutlineAddBox} from 'react-icons/md'
import { useEffect, useState } from 'react';
import Host from '../../Hosts.json'
import * as Json from './jsons/Exports'
const AddBox=()=>{
    const navigate=useNavigate();
    const handleClicke=()=>{
        navigate('./add');
    }

    return(<Components.Box 
        process={'add'}
        onClick={handleClicke}
        style={{border:'none'}}    
    >
        <MdOutlineAddBox   size={80} color='#023e8a'/>
    </Components.Box>);

}
export const Index=()=>{
    const location=useLocation();
    const navigate=useNavigate();
    const [items,setItems]=useState([]);
    const getInfo=async()=>{
        const results= await Components.GetInfo({
            path:`${Host.server}${location.pathname}`
        });
        if(results.status==='success'){
            setItems(results.data);
        }else{
            alert('Error');
        }
        
    }
    useEffect(()=>{ 
        if(location.pathname==='/'){
            getInfo();
        }
    },[location.pathname]);

    const handleClick=(event)=>{
        // console.log(event);
        if(event.type&&event.type==='scenes'){
            navigate(`/scenes`,{state:event});
        }   
    }

    return(<><Components.Container style={{backgroundColor:'#0077b6'}}>
        <Components.Container width='80%' >
            <div className='center'> 
                <Components.ListBoxes
                    type={'scenes'}
                    items={items}
                    names={Json.ListNamesOutID['scenes']}
                    onClick={handleClick}
                >
                    <AddBox/>
                </Components.ListBoxes>
               
            </div>
        </Components.Container>
    </Components.Container><Outlet/> </>);

}

