const mongoose=require('mongoose');

//Creates a Schema for Question database
const questionsschema=new mongoose.Schema({
    question:{
        type:String,
        required:[true,'Document must contain a question']
    },
    option1:{
        type:String,
        required:[true,'Option1 required']
    },
    option2:{
        type:String,
        required:[true,'Option2 required']
    },
    option3:{
        type:String,
        required:[true,'Option3 required']
    },
    option4:{
        type:String,
        required:[true,'Option4 required']
    },
    answer:{
        type:String,
        required:[true,'Correct answer required']
    }
});

//Creates a model for the Question database
const Question=mongoose.model('Question',questionsschema);

//Exports the model so that it can be used by controllers
module.exports=Question;