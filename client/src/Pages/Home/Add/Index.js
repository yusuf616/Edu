import { useState } from 'react';
import * as Components from '../../../Components/Exports';
import * as Json from '../jsons/Exports'
import Host from '../../../Hosts.json';
import { useLocation ,useNavigate} from 'react-router-dom';



export const Index=()=>{
    const location=useLocation();
    const navigate=useNavigate();
    const handleSubmit=async(event)=>{
        event.preventDefault();
        const errors=[];
        const form=event.currentTarget;
        const formData=new FormData(form);
        const info=Object.fromEntries(formData);

        Json.Inputs['add'].forEach(input=>{
            if(info[input.name]===''){
                errors.push(`${input.placeholder} Gir`);
            }
        })
        if(errors.length!==0){
            alert(`${errors.map(error=>error+'\n')}`)
        }else{
            console.log(`${Host.server}${location.pathname}`);
            const a=await fetch(`${Host.server}${location.pathname}`,{
                method:'post',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify({
                    "data":info,
                    "inputs":Json.ListNamesOutID['add']
                })
            })
            const resulte=await a.json();
            if(resulte.status==='success'){
                alert(resulte.message);
                window.history.back();
            }else{
                alert(resulte.message );
            }
        }
    }


    
    return (<Components.Container 
        back={true}
    >
        <div className='center'>
            <Components.InputForm
                onSubmit={handleSubmit}
                style={{backgroundColor:'#3330'}}
                inputs={Json.Inputs['add']}
                submitTitle='Ekle'
                title='Yeni Sahna'
                
            />
        </div>
    </Components.Container>);
}

