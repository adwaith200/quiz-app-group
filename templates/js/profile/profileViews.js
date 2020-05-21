import {elements} from './baseprofile';

export const showdata=(data)=>{

    if(data.firsttime===true){
        console.log(elements);
        console.log(elements.marks);
        elements.marks.style.display='none';
    }
    else{
        elements.marks.style.display='block';
        elements.question.innerHTML="";
        elements.profile_link.textContent="Retake test"

    }

}
