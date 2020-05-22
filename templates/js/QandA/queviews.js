import {elements} from './baseque';

console.log(elements.profile_details)


    export async function clearResults(){
    elements.qa_body.innerHTML="";
    document.querySelector('.buttons').innerHTML="";
    }

    function createButtons(page,type){
    const button=`<button class="buttons_paginationBtn" data-goto=${type === 'prev' ? page - 1 : page + 1}">
                 <span>page-${type==='prev'? page - 1: page + 1}</span>
     </button>`   
     return button;
    }

 
    function displayButtons(data,page,limit){
         const totalquestions=data.length;
         const pages=totalquestions/limit;
         let buttons;
         if(page==1){
             buttons=createButtons(page,'next');
         }
         else{
             buttons=createButtons(page,'prev');
         }
         document.querySelector('.buttons').insertAdjacentHTML("afterbegin",buttons);
     }





export default class Questions{
    constructor (data){
        this.data=data;
    }

    

    showquestions(page=1,limit=5){

        let start=(page-1)*limit;
        let end=(page)*limit;
        const totalquestions=this.data.length;
        

        if(totalquestions==limit){
            this.data.forEach((e,i)=> { 
            elements.qa_body.insertAdjacentHTML('beforeend',
            `<div class="qa_box">
                    <span class="qa_box--question">${start+i+1}. ${e.question}</span>
                        <div class="qa_box--option-1"><input type="radio" class="class-${i+1}" name="quesion${i+1}" value="${e.option1}">${e.option1}</div>
                        <div class="qa_box--option-2"><input type="radio"  class="class-${i+1}" name="quesion${i+1}" value="${e.option2}">${e.option2} </div>
                        <div class="qa_box--option-3"><input type="radio" class="class-${i+1}" name="quesion${i+1}" value="${e.option3}">${e.option3} </div>
                        <div class="qa_box--option-4"><input type="radio"  class="class-${i+1}" name="quesion${i+1}" value="${e.option4}"> ${e.option4}</div>
            </div>`)//end of html insertion
            })//end of loop
        }

        else if(totalquestions>limit){
            this.data.slice(start,end).forEach((e,i)=>{
                elements.qa_body.insertAdjacentHTML('beforeend',
            `<div class="qa_box">
                    <span class="qa_box--question">${start+i+1}. ${e.question}</span>
                        <div class="qa_box--option-1"><input type="radio" class="class-${start+i+1}" name="quesion${start+i+1}" value="${e.option1}">${e.option1}</div>
                        <div class="qa_box--option-2"><input type="radio" class="class-${start+i+1}" name="quesion${start+i+1}" value="${e.option2}">${e.option2} </div>
                        <div class="qa_box--option-3"><input type="radio" class="class-${start+i+1}" name="quesion${start+i+1}" value="${e.option3}">${e.option3} </div>
                        <div class="qa_box--option-4"><input type="radio" class="class-${start+i+1}" name="quesion${start+i+1}" value="${e.option4}"> ${e.option4}</div>
            </div>`)//end of html
            })//end of loop
        }

        
        displayButtons(this.data,page,limit);
    }//end of showfunction


    // displaymarks(count){
    //     console.log(elements.profile_details);
    //     elements.profile_details.insertAdjacentHTML("beforeend",`<span class="testmarks">Marks: ${count}/10</span>`);
    // }
    sendtoprofile(result){
        console.log('hello');
        console.log(result.data.status);
        if(result.data.status==='success')
        {
            location.assign('/profile');
        }
    }
}