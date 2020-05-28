import axios from 'axios';

export const getData=async()=>{
    try{
       
        const result=await axios('/questions');
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
            url:'/user/updatemarks',
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

