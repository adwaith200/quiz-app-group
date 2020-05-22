import axios from 'axios';

export const getData=async()=>{
    try{
       
        const result=await axios('http://127.0.0.1:3000/questions');
        return result.data.data.questiondata ;

    }
    catch(error){
        console.log(error);
    }    
}