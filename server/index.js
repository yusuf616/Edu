const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const http=require('http');
const routes =require('./routes/index')

dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());
app.use('/',routes);

app.use(express.static('public'));
const server=http.createServer(app);
const PORT=process.env.PORT||6082

server.listen(PORT,(err)=>{
    if (err) {
        console.log(`Error in running the Server ${err}`);
    } else{
        console.log("Server is Running on port",PORT,"...");
    };
})

