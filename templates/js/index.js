import {ele} from './baseglobal';
import {signupctrl} from './signUp/signupctrl';
import {logoutctrl} from './logout/logoutctrl';

if(ele.signupform)
{
    document.querySelector('.signUpBtn').addEventListener("click",async (e)=>{
        e.preventDefault();
        await signupctrl();
    });

}
if(ele.logout)
{
    ele.logout.addEventListener('click',logoutctrl)
}