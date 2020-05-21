import axios from 'axios';

export const getData=async()=>{
    try{
       
        const result=await axios('http://127.0.0.1:3000/user/getme');
        return result ;
    }
    catch(error){
        console.log(error);
    }    
}
