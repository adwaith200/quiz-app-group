//Npm modules
const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcryptjs');
const crypto=require('crypto');

//Creating a Schema for the User database
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A user must have a name']
    },
    email:{
        type:String,
        required:[true,'A user must have an email'],
        unique:true
    },
    role:{
        type:String,
        default:'user',
        enum:['user','admin']
    },
    password:{
        type:String,
        required:[true,'A user must have a pasword'],
        select:false
    },
    passwordconfirm:{
        type:String,
        required:[true,'Please confirm your password'],
        validate:{
            validator:function(){
                return this.password===this.passwordconfirm
            },
            message:'The two passwords are not same'
        }
    },
    passwordresettoken:String,
    passwordresetexpire:Date,
    photo:{
        type:String,
        default:'default'
    },
    firsttime:{
        type:Boolean,
        default:true
    },
    marks:{
        type:Number,
        min:0,
        max:10,
        default:0
    }
});

//Used to encrypt password
userschema.pre('save',async function(next){
    if(!this.isModified('password'))    //if the data modified was not password then it continues with encrypting
    {
        return next();
    }
    this.password=await bcrypt.hash(this.password,12);
    this.passwordconfirm=undefined;
    next();
});

//Checks the inputted password with existing password in the database and returns true(matches) or false(Doesnt match)
userschema.methods.checkpassword=async function(ippass,dbpass){
    return await bcrypt.compare(ippass,dbpass);
} 

//Used for creating a 32bit string and hashing it in database
userschema.methods.forgotpassword=function(){
    const token=crypto.randomBytes(32).toString('hex');
    this.passwordresettoken=crypto.createHash('sha256').update(token).digest('hex');
    this.passwordresetexpire=Date.now()+10*60*1000;
    return token;
}

//Creating a model for User database
const User=mongoose.model('User',userschema);

//Exporting User model for controllers to use
module.exports=User;