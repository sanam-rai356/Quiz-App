
const questions = [
{
    question:"Which is largest animal in the world?",
    answers:[
        {  text:"Shark",correct:false,},
        {  text:"Blue Whale",correct:true,},
        {  text:"Elephant",correct:false,},
        {  text:"Giraffe",correct:false,},
    ]
},

{
    question:"Which is smallest country in the world?",
    answers:[
        {  text:"Vatican City",correct:true,},
        {  text:"Bhutan",correct:false,},
        {  text:"Shri Lanka",correct:false,},
        {  text:"Nepal",correct:false,},
    ]
},

{
    question:"Which is largest dessert in the world?",
    answers:[
        {  text:"Gobi",correct:false,},
        {  text:"Antarctica",correct:true,},
        {  text:"Sahara",correct:false,},
        {  text:"Kalahari",correct:false,},
    ]
},

{
    question:"Which is smallest continent in the world?",
    answers:[
        {  text:"Asia",correct:false,},
        {  text:"Africa",correct:false,},
        {  text:"Australia",correct:true,},
        {  text:"Arctic",correct:false,},
    ]
},
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextBTN = document.getElementById('nextBTN');

let currentQuestionIndex=0;
let score = 0;




function resetState(){
    nextBTN.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}



function selectAnswer(e){
 const selectedBtn = e.target;
 const isCorrect = selectedBtn.dataset.correct==="true";
 if(isCorrect){
   selectedBtn.classList.add("correct");
   score=score+1;
 }else{
  selectedBtn.classList.add("incorrect");
 }

  Array.from(answerButtons.children).forEach((button)=>{
      if(button.dataset.correct==="true"){
        button.classList.add("correct");
       
      }
      button.disabled="true";   
  })
  nextBTN.style.display="block";

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer)=>{
        const button = document.createElement('button');
        button.innerHTML=answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer)
    })
}

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextBTN.innerHTML="Next";
    showQuestion();
}
// ............................

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} of of ${questions.length}`;
    nextBTN.innerHTML="Play Again";
    nextBTN.style.display="block"
}

function handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
// ............................


nextBTN.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
        handelNextButton();
    }else{
        startQuiz();
    }
})

startQuiz()





