const mysqle=require('mysql2');

const Connect=require('./DatabaseConnect');

conn=mysqle.createConnection(Connect);


const Insert= async({
    tableName=null,
    columns= '',
    res=null,
    values='',
    arrayValue=null
})=>{
    console.log(columns)
    if(tableName  && columns!==''){
       
        var sqlCode=`insert  into ${tableName} ${columns} values ${values} `
        arrayValue?sqlCode+= ' ? ':null;
        conn.query(sqlCode,[arrayValue],(err,results)=>{
            if(err){
                console.log(err);
                res?res.json({
                    status:'unsuccess',
                    message:'başarısız işlem',
                    data:err,
                }):null;
            }else{
                res?res.json({
                    status:'success',
                    message:'başarılı işlem',
                    data:results,
                }):null;
            }
        })
    }else{
        res?res.json({
            status:'unsuccess',
            message:'VeriTabanı arza',
            data:[],
        }):null
    }
    
    
}


module.exports= Insert;