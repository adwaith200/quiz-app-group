import {ele} from './baseglobal';
import {signupctrl} from './signUp/signupctrl';


if(ele.signupform)
{
    document.querySelector('.signUpBtn').addEventListener("click",e=>{
        e.preventDefault();
        signupctrl();
    });

}
