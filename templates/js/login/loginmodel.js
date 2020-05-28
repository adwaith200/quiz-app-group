import axios from 'axios';
export default class Login{
    constructor(email,password){
        this.email=email;
        this.password=password;
        
    }
 
    async uploadloginData(){
        try{
            console.log(this.email,this.password);
            // const formmdata=new FormData();
            // formmdata.append('email',this.email);
            // formmdata.append('password',this.password);
            const data=await axios({
                method:'POST',
                url:'/user/login',
                data:{
                    email:this.email,
                    password:this.password
                }
            });
            console.log('login done');
            console.log(data);
            if(data.data.status==='success')
            {
                location.assign('/profile');
            }
            if(data.data.message==='Invalid credentials entered')
            {
                return false;
            }
            return true;
        }
        catch(err)
        {
            console.log(err.response);
        }
    }
}

