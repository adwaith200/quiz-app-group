import axios from "axios";

export const logoutctrl=async ()=>{
    try{
        const userdata=await axios('/user/logout');
        console.log(userdata);
        location.reload(true);
    }catch(err)
    {
        console.log(err.response);
    }
}