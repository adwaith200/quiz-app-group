//npm modules
const jwt=require('jsonwebtoken');
const {promisify}=require('util');
const crypto=require('crypto');

//user defined modules
const User=require('../models/usermodel');
const Apperror=require('../utils/error');
const Email=require('../utils/sendmail');

//Handles signup request
exports.signup=async(req,res,next)=>{
    try{
        const {name,email,password,passwordconfirm,role}=req.body;  //Details are extracted from req.body
        let userdata;
        if(req.file)
        {
            
            userdata=await User.create({                          //An account is created based on details 
                name,
                email,
                password,
                passwordconfirm,
                role,
                photo:req.file.filename
            });
        }
        else
        {
            
            userdata=await User.create({                          //An account is created based on details 
                name,
                email,
                password,
                passwordconfirm,
                role
            });
        }
        
        const token=jwt.sign({id:userdata.id},process.env.JWT_SECRET);  //A jwt token is signed and sent for authentication purposes
        res.cookie('jwt',token,{                                        //jwt token is also sent in form of cookie for browser use of authentication
            expires:new Date(Date.now()+90*24*60*60*1000),
            httpOnly:true
        });
        res.json({
            status:'success',
            token,
            data:{
                userdata
            }
        });
    }catch(err)
    {
        next(err);
    }
}

//Handles with the login request
exports.login=async(req,res,next)=>{
    try{
        const {email,password}=req.body;                //Details are extracted from req.body
        const userdata=await User.findOne({email:email}).select('password');       //An existing account search based on email
        if(!userdata ||!await userdata.checkpassword(password,userdata.password))       //Checked if account exists and password entered matches with one stored in database
        {
            return next(new Apperror('Invalid credentials entered',404));           //If not found,an error is sent
        }
        const token=jwt.sign({id:userdata.id},process.env.JWT_SECRET);       //If details match then a token is signed for authentication
        res.cookie('jwt',token,{                                             //jwt token is also sent in form of cookie for browser use of authentication      
            expires:new Date(Date.now() + 90*24*60*60*1000),
            httpOnly:true
        });
        res.json({
            status:'success',
            token,
            data:{
                userdata
            }
        });
    }catch(err)
    {
        next(err);
    }
}

exports.isloggedin=async(req,res,next)=>{
    //Check if cookie exists
    if(req.cookies.jwt)
    {
        try{
            //Verify the jwt token
            const decoded=await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
            //Get the user based on id inside token
            const user=await User.findById(decoded.id);
            //If user doesnt exist continue
            if(!user)
            {
                return next();
            }
            //Send data to pug templates
            res.locals.user=user;
            return next();
        }catch(err)
        {
            return next();
        }
    }
    next();
}
//Implements logout feature
exports.logout=(req,res)=>{
    res.cookie('jwt','helloo',{
        expires:new Date(Date.now()+1000*10),
        httpOnly:true
    });
    res.json({
        status:'success',
        message:'Logged out'
    });
}

//Used for authentication
exports.protect=async(req,res,next)=>{
    try{
        let token;
        if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer'))   //Checks if token is present in request headers
        {
            token=req.headers.authorization.split(' ')[1];              //If present,then assigns it to token variable
        }
        else if(req.cookies.jwt)
        {
            token=req.cookies.jwt;
        }
        else
        {
            return next(new Apperror('Please login to continue',401));  //Returns an error if token is not present in request headers
        }
        const userid=await promisify(jwt.verify)(token,process.env.JWT_SECRET); //The token details are extracted by verifying the token body
        const userdata=await User.findById(userid.id);              //The user id is extracted from token's details and user data is found
        if(!userdata)                                               //If user data is not found then token is not vaild
        {
            return next(new Apperror('Invalid token,login again',401));
        }
        req.user=userdata                                           //User data is put in request users
        next();
    }catch(err)
    {
        next(err);
    }
}

//Used for authorization functionality
exports.restrictto=async(req,res,next)=>{
    try{
        const users=['admin'];
        if(users.includes(req.user.role))   //Checks if req.user.role('user signed in') has role as admin
        {
            return next();                  //Returns next if user is admin
        }
        next(new Apperror('You are not authorized for this operation',401));    //Returns an error if user is not admin
    }catch(err)
    {
        next(err);
    }
}

//Implements forgot password feature
exports.forgotpassword=async(req,res,next)=>{
    try{
        const {email}=req.body;     //Email is extracted from request body
        const userdata=await User.findOne({email:email});       //User details is found based on email
        if(!userdata)                                   //If user details is not found,email entered is wrong
        {
            return next(new Apperror('Invalid emailID',404));
        }
        const token=userdata.forgotpassword();          //A random token is generated
        userdata.save({validateBeforeSave:false});      //Changes for passwordresettoken is applied in database
        const options={                                 //Email options such a send email and url to redirect is defined
            to:email,
            url:`${req.protocol}://${req.get('host')}/resetpassword/${token}`
        };
        try{
            await new Email(options).passwordreset();   //Email is sent with the above details
            res.json({
                status:'success',
                message:'Token sent to your email'
            });
        }catch(err)
        {
            userdata.passwordresetexpire=undefined;
            userdata.passwordresettoken=undefined;
            await userdata.save({validateBeforeSave:false});
            console.log(err);
            next(err);
        }
    }catch(err)
    {
        next(err);
    }
}

//Implements resetpassword feature
exports.resetpassword=async(req,res,next)=>{
    try{
        const haskedtoken=crypto.createHash('sha256').update(req.params.token).digest('hex');   //An encrypted token is generated from request token
        const userdata=await User.findOne({passwordresettoken:haskedtoken});                //User account is searched based on encrypted token
        if(!userdata)  //If user account is not found then token is invalid
        {
            return next(new Apperror('Invalid token',404));
        }
        userdata.password=req.body.password;        //User password in database is modified with entered password
        userdata.passwordconfirm=req.body.passwordconfirm;
        userdata.passwordresettoken=undefined;
        userdata.passwordresetexpire=undefined;
        await userdata.save();            //password and passwordconfirm in database are equated before saving
        const token=jwt.sign({id:userdata.id},process.env.JWT_SECRET);  //A token is signed for proof of login
        res.cookie('jwt',token,{            //The token is sent as a cookie
            expires:new Date(Date.now()+90*24*60*60*1000),
            httpOnly:true
        });
        res.json({
            status:'success',
            data:{
                token
            }
        });
    }catch(err)
    {
        next(err);
    }
}