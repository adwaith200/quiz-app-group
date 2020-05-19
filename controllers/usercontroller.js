//npm modules
const multer=require('multer');
const sharp=require('sharp');

//User defined modules
const User=require('../models/usermodel');
const Apperror=require('../utils/error');

const multerstorage=multer.memoryStorage();

const multerfilter=(req,file,cb)=>{
    if(file.mimetype.startsWith('image'))
    {
        cb(null,true);
    }
    else
    {
        cb(new Apperror('Not an image',401),false);
    }
}

const upload=multer({
    storage:multerstorage,
    fileFilter:multerfilter
});

exports.uploadpic=upload.single('photo');

exports.resizepic=async(req,res,next)=>{
    try{
        if(!req.file)
        {
            return next();
        }
        req.file.filename=`user-${req.user.id}-${Date.now()}.jpeg`;
        await sharp(req.file.buffer).resize(500,500).toFormat('jpeg').jpeg({quality:90}).toFile(`templates/images/users/${req.file.filename}`);
        next();
    }catch(err)
    {
        next(err);
    }
}

//Checks if the user has not taken test before
exports.checkfirsttimetest=async(req,res,next)=>{
    try{
        if(req.user.firsttime===true)
        {
            await User.findByIdAndUpdate(req.user.id,{
                firsttime:false
            });
            return next();
        }
        next();
    }catch(err)
    {
        next(err);
    }
}

//Update marks
exports.updatemarks=async(req,res,next)=>{
    try{
        const userdata=await User.findByIdAndUpdate(req.user.id,{       //User is found by the id and marks is updated by entering in body
            marks:req.body.marks
        });
        res.json({
            status:'success',
            data:{
                userdata
            }
        });
    }catch(err)
    {
        next(err);
    }
}