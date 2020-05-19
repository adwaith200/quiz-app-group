const Question=require('../models/questionsmodel');
const Apperror=require('../utils/error');

//Gets the data of all questions
exports.getallquestions=async(req,res)=>{
    try{
        const questiondata=await Question.find();
        res.json({
            status:'success',
            length:questiondata.length,
            data:{
                questiondata
            }
        })
    }catch(err)
    {
        next(err);
    }
}

//Gets one question based on id passed
exports.getquestion=async(req,res,next)=>{
    try{
        const questiondata=await Question.findById(req.params.id);
        res.json({
            status:'success',
            data:{
                questiondata
            }
        })
    }catch(err)
    {
        next(err);
    }
}

//Creates a question
exports.createquestion=async(req,res)=>{
    try{
        const questiondata=await Question.create(req.body);
        res.json({
            status:'success',
            data:{
                questiondata
            }
        });
    }catch(err)
    {
        next(err);
    }
}

//Deletes all the questions in the database
exports.deleteallquestions=async(req,res,next)=>{
    try{
        const questiondata=await Question.deleteMany();
        res.json({
            status:'success',
            data:{
                questiondata
            }
        })
    }catch(err)
    {
        next(err);
    }
}

//Updates a particular question based on that ID
exports.updatequestion=async(req,res,next)=>{
    try{
        const questiondata=await Question.findByIdAndUpdate(req.params.id,req.body,{
            runValidators:true,
            new:true
        });
        res.json({
            status:'success',
            data:{
                questiondata
            }
        });
    }catch(err)
    {
        next(err);
    }
}

//Deletes a question based on ID
exports.deletequestion=async(req,res,next)=>{
    try{
        const questiondata=await Question.findByIdAndDelete(req.params.id);
        res.json({
            status:'success',
            data:{
                questiondata
            }
        });
    }catch(err)
    {
        next(err);
    }
}