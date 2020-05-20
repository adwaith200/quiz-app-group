import axios from 'axios';
export default class Signup{
    constructor(name,email,password,confirmPassword){
        this.name=name;
        this.email=email;
        this.password=password;
        this.confirmPassword=confirmPassword;
    }

    async uploadSignupData(){
        try{
            const data=await axios({
                method:'POST',
                url:'http://127.0.0.1:3000/user/signup',
                data:{
                    name:this.name,
                    email:this.email,
                    password:this.password,
                    passwordconfirm:this.confirmPassword
                }
            });
            console.log(data);
            if(data.data.status==='success')
            {
                location.assign('/profile');
            }
        }
        catch(err)
        {
            console.log(err.response);
        }
    }
}

