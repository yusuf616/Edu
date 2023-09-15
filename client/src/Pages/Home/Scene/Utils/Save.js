import Hosts from '../../../../Hosts.json';


export const Save=async({
    listNames,
    path,
    data
})=>{

    const a=await fetch(`${Hosts.server}${path}`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            names:listNames,
            data:data
        })
    })
    
    return await a.json();

}