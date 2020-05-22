//Node modules
const express=require('express');

//User defined functions
const questionscontroller=require('../controllers/questionscontroller');
const authcontroller=require('../controllers/authcontroller');
const usercontroller=require('../controllers/usercontroller');

//Used for chaining multiple endpoints
const router=express.Router();

//Default route
router.route('/')
    .get(authcontroller.protect,usercontroller.checkfirsttimetest,questionscontroller.getallquestions)
    .post(authcontroller.protect,authcontroller.restrictto,questionscontroller.createquestion)
    .delete(authcontroller.protect,authcontroller.restrictto,questionscontroller.deleteallquestions);

//This route contains id of question
router.route('/:id')
    .get(questionscontroller.getquestion)
    .patch(authcontroller.protect,authcontroller.restrictto,questionscontroller.updatequestion)
    .delete(authcontroller.protect,authcontroller.restrictto,questionscontroller.deletequestion);

//Exports router so that it can be used in app.js
module.exports=router;