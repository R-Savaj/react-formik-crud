const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    user:"root",
    host:'localhost',
    password:"",
    database:"pantonesData"
})
app.post('/create',(req,res)=>{
    db.query('INSERT INTO pantones(name,year,pantone_value) VALUES (?,?,?)',[req.body.name,req.body.year,req.body.pantone_value],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            const data={
                code:200,
                message:'Record Added successfully.'
            }
            res.send(data);
        }
    });
});

app.get('/pantones',(req,res)=>{  
    db.query('SELECT * from pantones',(err,result)=>{
        if(err){
            console.log(err);
        }else{
            let data = {
                code:200,
                data:result
            }
            res.send(data);
        }
    });
});

app.get('/pantone/:id',(req,res)=>{
    db.query(`SELECT * from pantones WHERE id=${req.params.id}`,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            let data = {
                code:200,
                data:result[0]
            }
            res.send(data);
        }
    });
})

app.put('/pantone/:id',(req,res)=>{
    db.query('UPDATE pantones SET name = ?,year = ?,pantone_value =? WHERE id = ?',[req.body.name,req.body.year,req.body.pantone_value,req.params.id],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            const data={
                code:200,
                message:'Record updated successfully.'
            }
            res.send(data);
        }
    });
})

app.delete('/pantone/:id',(req,res)=>{
    db.query(`DELETE from pantones WHERE id=${req.params.id}`,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            let data = {
                code:200,
                message:'Record deleted successfully.'
            }
            res.send(data);
        }
    });
})

app.listen(3001,()=>{
    console.log('your app running on port 3001')
})