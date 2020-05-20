import {element} from './baseforgotpass';
import axios from 'axios';

export const forgotpassword=async()=>{
    try{
        const email=element.emailform.value;
        console.log(email);
        const userdata=await axios({
            method:'PATCH',
            url:'http://127.0.0.1:3000/user/forgotpassword',
            data:{
                email
            }
        });
        if(userdata.data.status==='success')
        {
            alert(userdata.data.message);
        }
        console.log(userdata);
    }catch(err)
    {
        console.log(err.response);
    } 
}