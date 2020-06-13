const express=require('express');
const spawn=require('child_process').spawn;
const process=spawn('python',['./python.py']);
const cors=require('cors');
const app=express();
let result;
process.stdout.on('data',(data)=>{
    result=data.toString();
    console.log(result);
});

app.get('/',cors(),(req,res)=>{
    
    console.log(result);
    res.json({
        status:'success',
        data:result
    });
});


app.listen(3000,()=>{
    console.log('server running on port 3000');
});
