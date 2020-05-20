//login controller 

import {elements} from './baseLogin';
import * as loginView from './loginViews';
import login from './loginmodel';


 
export const loginctrl=async ()=>{

    let email,password;
  
    if(loginView.emailValidity()===false){
        return
    }
    else{
         email=loginView.emailValidity();
    }

    if(loginView.passwordValidity()===false){
        return
    }
    else{
         password=loginView.passwordValidity();
    }


    const loginobj=new login(email,password);
    if(await loginobj.uploadloginData()===false)
    {
        loginView.credentialsError();
    }



}
