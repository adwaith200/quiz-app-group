import {elements} from './baseque';

export default class Questions{
    constructor (data){
        this.data=data;
    }

    showquestions(){
        
        this.data.forEach((e,i)=>  

        elements.qa_body.insertAdjacentHTML('beforeend',
        `<div class="qa_box">
                 <span class="qa_box--question">${i+1}. ${e.question}</span>
                    <div class="qa_box--option-1"><input type="radio" name="quesion1" value="1">${e.option1}</div>
                    <div class="qa_box--option-2"><input type="radio" name="quesion1" value="2">${e.option2} </div>
                    <div class="qa_box--option-3"><input type="radio" name="quesion1" value="3">${e.option3} </div>
                    <div class="qa_box--option-4"><input type="radio" name="quesion1" value="4"> ${e.option4}</div>
        </div>`)//end of html insertion
    )//end of loop

    }//end of function


}