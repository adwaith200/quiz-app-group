import axios from 'axios';

export const getData=async()=>{
    try{
       
        const result=await axios('http://127.0.0.1:3000/questions');
        console.log(result);
        return result.data.data.questiondata ;

    } 
    catch(error){
        console.log(error);
    }    
}

export const senddata=async(count)=>{
    try{
        const userdata=await axios({
            method:'PATCH',
            url:'http://127.0.0.1:3000/user/updatemarks',
            data:{
                marks:count
            }
        });
        console.log(userdata);
        return userdata;
    }catch(err)
    {
        console.log(err.response);
    }
}

