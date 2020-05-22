import {getData,senddata} from './modelque';
import Questions from './queviews';
import {clearResults} from './queviews';

export const quectrl=async()=>{
    const data=await getData();
    console.log(data);

    const questionsobj= new Questions(data);
    questionsobj.showquestions();

    const evaluate=async (options)=>{
        let count=0;
        options.forEach((e,i)=>{
            if(e===data[i].answer){
                count++;
            }
        })
        console.log(count);
        const result=await senddata(count);
        questionsobj.sendtoprofile(result);
        // questionsobj.displaymarks(count);
    }


//    const persistData=(value)=>{
//          localStorage.setItem('values', value);
//    }


    document.querySelector('.buttons').addEventListener('click',e=>{

         let btn=e.target.closest('.buttons_paginationBtn');

         if(btn){
            let goToPage=parseInt(btn.dataset.goto);
            clearResults();
            questionsobj.showquestions(goToPage);
           }
     
    })

    document.querySelector('.submit_data').addEventListener('click',()=>{

        let selectedValue=[];
        data.forEach((e,i)=>{
            const rbs=document.querySelectorAll(`.class-${i+1}`)
         
    
            for (const rb of rbs){
                if(rb.checked){
                    selectedValue[i]=rb.value;
                    // persistData( selectedValue[i]);
                    break;
                }
            }
        })

        // persistData() {
        //     localStorage.setItem('likes', JSON.stringify(this.likes));
        // }
    
        // readStorage() {
        //     const storage = JSON.parse(localStorage.getItem('likes'));
            
        //     // Restoring likes from the localStorage
        //     if (storage) this.likes = storage;
        // }
    
    
        selectedValue.forEach(e=>console.log(e));
        
        evaluate(selectedValue);
    })



}




 
