import {elements} from './baseSignup';

export const showError=(input,message,small,type)=>{

   const parentInput=input.parentElement;
   parentInput.className=" input error";
   const text=document.querySelector(`.${small}`);
   text.innerText=message;
   document.querySelector(`.${type}`).className=`login_form--input ${type} error`
       

}

export const showSuccess=(input,type)=>{

   const parentInput=input.parentElement;
   parentInput.className=" input success";
   document.querySelector(`.${type}`).className=`login_form--input ${type} success`
   

}
//name issue
export const nameValidity=()=>{
   if(elements.name.value===""){
      console.log('error name');
      showError(elements.name,"Name not entered","small_name","name");
   }
   else{
      showSuccess(elements.name,"name");
      return elements.name.value;
   }
}

//email Issue
export const emailValidity=()=>{
   if(elements.email.value===""){
      console.log(elements.email);
      console.log('error email');
      showError(elements.email,"Email not entered","small_email","email");
   }
   else{
      showSuccess(elements.email,"email");
      return elements.email.value;

   }
}

//password issue
export const passwordValidity=()=>{
   if(elements.password.value===""){
   
   
      showError(elements.password,"password not entered","small_password","password");
   }
   else{
      showSuccess(elements.password,"password");
      return elements.password.value;

   }
}
//confirm password issue

export const confirmpasswordValidity=()=>{

   if(elements.confirmPassword.value===""){
   
   
      showError(elements.confirmPassword,"Confirm password","small_confirmpassword","confirmPassword");
   }
   else{
      showSuccess(elements.confirmPassword,"confirmPassword");
      return elements.confirmPassword.value;

   }
}