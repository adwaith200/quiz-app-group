import {getData} from './modelque';
import Questions from './queviews'

export const quectrl=async()=>{
    const data=await getData();
    console.log(data);

    const questionsobj= new Questions(data);
    questionsobj.showquestions();

}

 
