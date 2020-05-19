//Node modules
const express=require('express');
const cookieparser=require('cookie-parser');
const cors=require('cors');
const path=require('path');

//Importing user defined modules
const questionsrouter=require('./routes/questionsroute');
const userrouter=require('./routes/userroute');
const viewrouter=require('./routes/viewroute');
const globalerror=require('./controllers/errorcontroller');
const Apperror=require('./utils/error');

//Uses express framwork
const app=express();

//Used for setting the view engine to pug
app.set('view engine','pug');
//Used for telling where the views are located
app.set('views',path.join(__dirname,'views'));

//Used for parsing body
app.use(express.json());
//Used for parsing cookie
app.use(cookieparser());
//Used for serving static files
app.use(express.static(path.join(__dirname,'templates')));

//User defined routers
app.use('/questions',cors(),questionsrouter);
app.use('/user',userrouter);
app.use('/',viewrouter);
app.all('*',(req,res,next)=>{
    next(new Apperror('Cant find this url',404));
});

app.use(globalerror);

module.exports=app;