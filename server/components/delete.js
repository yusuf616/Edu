const mysqle=require('mysql2');
const Conect=require('./DatabaseConnect');


conn=mysqle.createConnection(Conect);


const DeletItems= async({
    tableName=null,
    res=null,
    where=null,
})=>{

    if(tableName){
        var sqlCode=`delete from ${tableName} where ${where} `;
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


module.exports=DeletItems;