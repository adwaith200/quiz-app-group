import axios from 'axios';
export default class Signup{
    constructor(name,email,password,confirmPassword,photo){
        this.name=name;
        this.email=email;
        this.password=password;
        this.confirmPassword=confirmPassword;
        this.photo=photo
    }

    async uploadSignupData(){
        try{
            const formmdata=new FormData();
            formmdata.append('name',this.name);
            formmdata.append('email',this.email);
            formmdata.append('password',this.password);
            formmdata.append('passwordconfirm',this.confirmPassword);
            formmdata.append('photo',this.photo);
            const data=await axios({
                method:'POST',
                url:'/user/signup',
                data:formmdata
            });
            console.log(data)
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

