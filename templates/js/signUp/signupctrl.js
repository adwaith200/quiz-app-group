//signup controller 

import {elements} from './baseSignup';
import * as signupView from './signupviews';
import Signup from './signupmodel';

//const signup=new Signup()


export const signupctrl=async ()=>{

 let name,email,passwordconfirm,password;
    if(signupView.nameValidity()===false){
        return
    }
    else{
         name=signupView.nameValidity();
    }

    if(signupView.emailValidity()===false){
        return
    }
    else{
         email=signupView.emailValidity();
    }

    if(signupView.passwordValidity()===false){
        return
    }
    else{
         password=signupView.passwordValidity();
    }

    if(signupView.confirmpasswordValidity()===false){
        return
    }
    else{
        passwordconfirm=signupView.confirmpasswordValidity();
    }
 
   
   
    const photo=elements.photo.files[0];
    const signupobj=new Signup(name,email,password,passwordconfirm,photo);
    await signupobj.uploadSignupData();



}
