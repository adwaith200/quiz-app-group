//npm modules
const express=require('express');

//User defined routes
const viewcontroller=require('../controllers/viewcontroller');

//Used for chaining routes
const router=express.Router();

router.route('/').get(viewcontroller.showhomepage);         //This route is the default url
router.route('/login').get(viewcontroller.showloginpage);   //When this route is hit,login page is rendered
router.route('/signup').get(viewcontroller.showsignuppage); //When this route is hit,signup page is rendered
router.route('/profile').get(viewcontroller.showprofilepage); //When this route is hit,profile page is rendered
router.route('/qanda').get(viewcontroller.showquestionpage); //When this route is hit,question page is rendered

//Exports router so that it can be used from app.js
module.exports=router;