//npm modules
const express=require('express');

//User defined modules
const authcontroller=require('../controllers/authcontroller');
const usercontroller=require('../controllers/usercontroller');

//Used for chaining multiple endpoints
const router=express.Router();

router.route('/signup').post(usercontroller.uploadpic,usercontroller.resizepic,authcontroller.signup);    //This route is for signup page
router.route('/login').post(authcontroller.login);      //This route is for login page
router.route('/forgotpassword').patch(authcontroller.forgotpassword);   //This route is for forgotpassword page
router.route('/resetpassword/:token').patch(authcontroller.resetpassword);  //This route is for resetpassword page
router.route('/updatemarks').patch(authcontroller.protect,usercontroller.updatemarks); //This route is for updating marks of user

//Sends the router to app.js 
module.exports=router;