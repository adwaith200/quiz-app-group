import axios from 'axios'
export default class Signup{
    constructor(name,email,password,confirmPassword){
        this.name=name;
        this.email=email;
        this.password=password;
        this.confirmPassword=confirmPassword;
    }

    async uploadSignupData(){
        // const data=await axios({
        //     method:'POST',
        //     url:'127.0.0.1:3000/user/signup',
        //     data:{
        //         name:this.name,
        //         email:this.email,
        //         password:this.password,
        //         passwordconfirm:this.passwordconfirm
        //     }
        // });
        const data=await axios('127.0.0.1:3000/questions');
        console.log(data);
    }
}

