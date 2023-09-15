const express=require('express');
const Insert=require('../components/insert');
const Select =require('../components/select');
const router=express.Router();


router.route('/:process')
    .post((req,res)=>{
        const inputs=req.body.inputs;
        const data=req.body.data;
        const columns=`(${inputs.map((input)=>{return input})})`;
        const values=`(${inputs.map((input)=>{return `'${data[input]}'`})})`
        console.log(columns);
        console.log(values);
        switch(req.params.process){
            case 'add':
                Insert({
                    tableName:'scenes',
                    columns:columns,
                    values:values,
                    res:res,
                })
                break;
            default:
                res.json({});
        }
    })

router.route('/scenes/save')
    .post((req,res)=>{
        console.log(req.body);
        const inputs=req.body.names;
        const data=req.body.data;
        const columns=`(${inputs.map((input)=>{return input==='character'?'\`character\`':input})})`;
        const values=`(${inputs.map((input)=>{return `'${data[input]}'`})})`
        console.log(columns)
        console.log(values)
        Insert({
            tableName:'\`function\`',
            columns:columns,
            values:values,
            res:res
        })
    })

router.route('/scenes/select')
    .get((req,res)=>{
        Select({
            tableName:'\`function\`',
            where:`idscenes = ${req.query.id}`,
            res:res
        })
    })

router.route('/')
    .get((req,res)=>{
        Select({
            tableName:'scenes',
            res:res
        })
    })
    .post((req,res)=>{
        res.json({message:'Hello World'});
    })

module.exports=router;
