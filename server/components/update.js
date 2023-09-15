const mysqle=require('mysql2');
const Conect=require('./DatabaseConnect');


conn=mysqle.createConnection(Conect);


const UpdateItem= async({
    tableName=null,
    res=null,
    values=null,
    where=null,
})=>{

    if(tableName && values && where){
        console.log('lll');
        var sqlCode=`
            Update ${tableName}
            Set ${values} 
            Where ${where} 
        `;
        conn.query(sqlCode,(err,results)=>{
            if(err){
                res?res.json({
                    status:'unsuccess',
                    message:'başarısız işlem',
                    data:err
                }):null
            }else{
                res?res.json({
                    status:'success',
                    message:'başarılı işlem',
                    data:results,
                }):null
            }
        })
    }else{
        res?res.status(404).json({
            err:'error'
        }):null
    }
    
    
}


module.exports=UpdateItem;