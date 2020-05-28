import {getData,senddata} from './modelque';
import Questions from './queviews';
import {clearResults} from './queviews';

 const globalselected=[];
 
export const quectrl=async()=>{
    localStorage.clear();
    const data=await getData();
   

    const questionsobj= new Questions(data);
    questionsobj.showquestions();

    // const evaluate=async (options)=>{
        
    //     options.forEach((e,i)=>{
    //         if(e===data[i].answer){
    //             count++;
    //         }
    //         if(globalselected[i]===data[i].answer){
    //             count++;

    //         }
            
    //     })

       
    //     const result=await senddata(count);
    //     questionsobj.sendtoprofile(result);
        
    // }


    let j=-1;
    let count=0;
    const evaluate=async (values)=>{
        
        j++;
       
            if(values===data[j].answer){
                count++;   
            }
           
            if(values===null){
                const result=await senddata(count);
                questionsobj.sendtoprofile(result);
            }
            else{
                const result=await senddata(count);
                questionsobj.sendtoprofile(result);
            }
        
        
    }





    const persistData=(value,i)=>{
        i=i+1;
       
        localStorage.setItem(`class-${i}`, JSON.stringify(value));
    }

    document.querySelector('.buttons').addEventListener('click',e=>{

         let btn=e.target.closest('.buttons_paginationBtn');

         if(btn){
            data.forEach((e,i)=>{
                const rbs=document.querySelectorAll(`.class-${i+1}`)
                for (const rb of rbs){
                    if(rb.checked){
                        globalselected[i]=rb.value;
                        
                        persistData( globalselected[i],i);
                        break;
                    }
                }
            });

            let goToPage=parseInt(btn.dataset.goto);
            clearResults();
            questionsobj.showquestions(goToPage);
            showchecked();
           }
     
    });

    document.querySelector('.submit_data').addEventListener('click',()=>{

        let selectedValue=[];
        data.forEach((e,i)=>{
            const rbs=document.querySelectorAll(`.class-${i+1}`)
         
    
            for (const rb of rbs){
                if(rb.checked){
                    selectedValue[i]=rb.value;
                    persistData(selectedValue[i],i);
                    break;
                }
            }
        })

        if(localStorage.length>0){
            for(let i=0;i<localStorage.length;i++){
                evaluate(JSON.parse(localStorage.getItem(`class-${i+1}`)));
            }
        }
        else
        {
            evaluate(null);
        }
    
      
    
    
        // selectedValue.forEach(e=>console.log(e));
        
        // if(globalselected.length===0)
        // {
        //     console.log('yo');
        //     evaluate(selectedValue);
        // }
        // else
        // {
        //     console.log('hey');
        //     console.log(globalselected);
        //     console.log(selectedValue);

        //      evaluate(globalselected);
        //   //  evaluate(selectedValue);

        // }
    })

}

const showchecked=()=>{
    for(let i=0;i<localStorage.length;++i)
    {
        let j=i+1;
        console.log(localStorage.key(i));
        const key=localStorage.key(i);
        const array=document.querySelectorAll(`.${localStorage.key(i)}`);
        //console.log(array);
        array.forEach(ele=>{
          //  console.log(typeof(ele.value),typeof(localStorage.getItem(key)),`"${ele.value}"`==localStorage.getItem(key));
            if(`"${ele.value}"`==localStorage.getItem(key))
            {
                ele.checked=true;
            }
        })
    }    
}


 
