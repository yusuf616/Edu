export const GetInfo=async({
    path,
})=>{   
    const a= await fetch(`${path}`);
    const resulte=await a.json();
    return resulte;
    
}   