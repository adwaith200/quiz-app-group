import {elements} from './baseLogin';

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
   else{
      showSuccess(elements.password,"password");
      return elements.password.value;

   } 
}

export const credentialsError=()=>{

   showError(elements.email,"Check email","small_email","email");

   showError(elements.password,"Check password","small_password","password");


}

