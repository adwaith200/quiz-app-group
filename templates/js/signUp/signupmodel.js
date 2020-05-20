export default class Signup{
    constructor(name,email,password,confirmPassword){
        this.name=name;
        this.email=email;
        this.password=password;
        this.confirmPassword=confirmPassword;
    }

     uploadSignupData(){
        console.log(this.name,this.email,this.password,this.confirmPassword);
    }
}

