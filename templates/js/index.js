import {ele} from './baseglobal';
import {signupctrl} from './signUp/signupctrl';
import {logoutctrl} from './logout/logoutctrl';
import {loginctrl} from './login/loginCtrl';
import {forgotpassword} from './forgotpass/forgotpass';
import {resetpassword} from './forgotpass/resetpassword';
 
if(ele.signupform)
{
    console.log('hello');
    document.querySelector('.signUpBtn').addEventListener("click",async (e)=>{
        e.preventDefault();
        await signupctrl();
    });

}

if(ele.logout)
{
    ele.logout.addEventListener('click',logoutctrl)
}

if(ele.login)
{
   
    document.querySelector('.loginbtn').addEventListener("click",async (e)=>{
        e.preventDefault();
       
        await loginctrl();
    });
}
if(ele.forgotpass)
{
    document.querySelector('.forgotpassbtn').addEventListener('click',async (e)=>{
        e.preventDefault();
        await forgotpassword();
    })
}
if(ele.resetpass)
{
    document.querySelector('.restpassbtn').addEventListener('click',e=>{
        e.preventDefault();
        resetpassword();
    })
}