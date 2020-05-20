//signup controller 

import {elements} from '../js/views/base';
import * as signupView from '../js/views/signupView';


document.querySelector('.signUpBtn').addEventListener("click",e=>{
     e.preventDefault();
     
    //  name issue
    if(elements.name.value===""){
        console.log('error name');
        signupView.showError(elements.name,"Name not entered","small_name","name");
    }
    else{
        signupView.showSuccess(elements.name,"name");
    }

    //email Issue

    if(elements.email.value===""){
        console.log(elements.email);
        console.log('error email');
        signupView.showError(elements.email,"Email not entered","small_email","email");
    }
    else{
        signupView.showSuccess(elements.email,"email");
    }


    //password issue
    
    if(elements.password.value===""){
      
      
        signupView.showError(elements.password,"password not entered","small_password","password");
    }
    else{
        signupView.showSuccess(elements.password,"password");
    }

    //confirm password issue

    if(elements.confirmPassword.value===""){
       
      
        signupView.showError(elements.confirmPassword,"Confirm password","small_confirmpassword","confirmPassword");
    }
    else{
        signupView.showSuccess(elements.password,"confirmPassword");
    }
})


