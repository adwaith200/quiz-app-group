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
      return false;
   }
   else if(!elements.email.value.includes('@')){
      showError(elements.email,"Not a valid Email","small_email","email");
      return false;
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
      return false;

   }
   else if (elements.password.value.length<6){
      showError(elements.password,"Password must have atleast 6 characters","small_password","password");
      return false;

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
      return false;
   }
   else if(elements.confirmPassword.value!==elements.password.value){
      showError(elements.password,"Passwords don't match","small_password","password");

      showError(elements.confirmPassword,"Passwords don't match","small_confirmpassword","confirmPassword");
      return false;
   }
   else{
      showSuccess(elements.confirmPassword,"confirmPassword");
      return elements.confirmPassword.value;

   }
}