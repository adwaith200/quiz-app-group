import Axios from "axios";

export const resetpassword=async()=>{
    try{
        const password=document.querySelector('.password').value;
        const passwordconfirm=document.querySelector('.confirmPassword').value;
        const token=window.location.search.slice(1,window.location.search.length);
        const userdata=await Axios({
            method:'PATCH',
            url:`http://127.0.0.1:3000/user/resetpassword/${token}`,
            data:{
                password:password,
                passwordconfirm:passwordconfirm
            }
        });
        console.log(userdata);
        if(userdata.data.status==='success')
        {
            location.assign('/profile');
        }
    }catch(err)
    {
        console.log(err.response);
    }
}

