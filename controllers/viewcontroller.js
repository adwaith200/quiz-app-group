//Renders the home page
exports.showhomepage=(req,res)=>{
    res.render('home',{
        title:'Quiz management'
    });
}

//Renders the login page
exports.showloginpage=(req,res)=>{
    res.render('login',{
        title:'Login'
    });
}

//Renders the signup page
exports.showsignuppage=(req,res)=>{
    res.render('signup',{
        title:'Signup'
    })
}

//Renders the profile page
exports.showprofilepage=(req,res)=>{
    res.render('viewprofile',{
        title:'Your profile'
    });
}

//Renders the questions page
exports.showquestionpage=(req,res)=>{
    res.render('QandA',{
        title:'Questions page'
    })
}

//Renders the forgot password page
exports.showforgotpasswordpage=(req,res)=>{
    res.render('forgotpassword',{
        title:'Forgot Password'
    });
}

//Renders the reset password page
exports.showresetpasswordpage=(req,res)=>{
    res.render('resetpassword',{
        title:'Reset Password'
    });
}