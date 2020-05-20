import axios from "axios";

export const logoutctrl=async ()=>{
    try{
        const userdata=await axios('http://127.0.0.1:3000/user/logout');
        console.log(userdata);
        location.reload(true);
    }catch(err)
    {
        console.log(err.response);
    }
}