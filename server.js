//Node modules
const dotenv=require('dotenv');
const app=require('./app');
const mongoose=require('mongoose');

dotenv.config({path:'./config.env'});

const dbpass=process.env.DATABASE_PASSWORD;
let DATABASE=`mongodb+srv://adwaith:<password>@cluster0-9ftjw.mongodb.net/quizapp2`;
const db=DATABASE.replace('<password>',dbpass);

mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>console.log('Database connected'));

const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})