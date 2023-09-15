const mysqle=require('mysql2');
const Connect=require('./DatabaseConnect');

conn=mysqle.createConnection(Connect);


const Select= async({
    tableName=null,
    data=null,
    res=null,
    where=null,
    join=null
})=>{

    if(tableName){
        console.log('room')
        var sqlCode=`select * from ${tableName} `;
        join?sqlCode+=` join ${join}`:null;
        where?sqlCode+=` where ${where} `:null;

        conn.query(sqlCode,(err,results)=>{
            if(err){
                res.json({
                    status:'unsuccess',
                    message:'başarısız işlem',
                    data:err
                })
            }else{
                res.json({
                    status:'success',
                    message:'başarılı işlem',
                    data:results,
                })
            }
        })
    }else{
        res.status(404).json({
            err:'error'
        })
    }
    
    
}


module.exports=Select;