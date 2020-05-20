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
                url:'http://127.0.0.1:3000/user/signup',
                data:formmdata
            });
            console.log(data)
            //console.log('hello',data.data.status);
            console.log('hello');
            // {
            //     name:this.name,
            //     email:this.email,
            //     password:this.password,
            //     passwordconfirm:this.confirmPassword
            // }
            if(data.data.status==='success')
            {
                console.log('hi');
                location.assign('/profile');
            }
        }
        catch(err)
        {
            console.log('hello');
            console.log(err.response);
        }
    }
}

