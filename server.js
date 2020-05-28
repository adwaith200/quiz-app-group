//Node modules
const dotenv=require('dotenv');
const app=require('./app');
const mongoose=require('mongoose');

dotenv.config({path:'./config.env'});

const dbpass=process.env.DATABASE_PASSWORD;

const db=process.env.DATABASE.replace('<password>',dbpass);

mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>console.log('Database connected')).catch(()=>console.log('not connected'));

const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})