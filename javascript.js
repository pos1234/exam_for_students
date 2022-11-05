const quest=document.getElementById("quest");
const ans=Array.from(document.getElementsByClassName("ans"));
let currentQuestions = {};
let acceptingQuestions = true;
let score = 0;
let sc;
let questionCounter = 0;
let availableQuestions=[];
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 3;
startGame = ()=>{
questionCounter = 0;
score=0;
availableQuestions = [...questions];
getNewQuestions();
};
getNewQuestions = ()=>{
      if(availableQuestions.length==0|| questionCounter > MAX_QUESTIONS){
        localStorage.setItem('score',score);
        return window.location.assign('/end.html');
    }  else{
    questionCounter++;
    const questionIndex = Math.floor(Math.random()*availableQuestions.length);
    currentQuestions = availableQuestions[questionIndex];
    quest.innerText= currentQuestions.que;
    
    ans.forEach(ans=>{
        const number = ans.dataset['number'];
        ans.innerText = currentQuestions['choice' + number];
    });
    availableQuestions.splice(questionIndex,1);
    acceptingQuestions = true;
}
}  
ans.forEach(ans=>{
    ans.addEventListener('click',e =>{
        if(!acceptingQuestions)return;
        acceptingQuestions = false;
        const selectedChoice = e.target.dataset['number'];
        if(currentQuestions.answr==selectedChoice){
            score +=CORRECT_BONUS;
        }
        getNewQuestions(); 
    });
});

startGame();
