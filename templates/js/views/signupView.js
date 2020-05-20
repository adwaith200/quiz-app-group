 import {elements} from '../views/base';

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

 