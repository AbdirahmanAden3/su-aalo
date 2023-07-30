const questions =[
    {
         question: 'gormee la aasasy soomaliya?',
         answer:[
            { Text:1960,correct: true},
            { Text:160,correct: false},
            { Text:1360,correct: false},
            { Text:1260,correct: false},
         ]

    },
    {
        question:'wadanaka dunida ugu dheer waa?',
        answer: [
        {Text: 'Afiraca',correct:false},
        {Text: 'soomaliya',correct:true},
        {Text: 'Asia',correct:false},
        {Text: 'canda',correct:false},
        
        ]
    },
    {
        question: 'xaywaan ugu weyn waa?',
        answer : [
            {Text: 'dameerka', correct: false},
            {Text: 'maroodiga', correct: false},
            {Text: 'dawacada', correct: true },
            {Text: 'yaxaaska', correct: false},
        ]
    }
];

const questionElment = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

  function startQuize(){
    questions.map(q)

  }

console.log(questions.random())
























// let currentQuestionIndex = 0;
// let score = 0;

// function startQuize(){
//         currentQuestionIndex = 0;
//         score = 0;  
//         nextButton.innerHTML = 'next';
//         showQuestion();

// }

// function showQuestion(){
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo =  currentQuestionIndex + 1;
//     questionElment.innerHTML = questionNo + "." + currentQuestion.answer.
//     question;   
//     currentQuestion.answer.forEach(answer =>{
//         const button =document.createElement("buttom");
//         button.innerHTML = answer.Text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button)
//     }
//         )
// }
// function startQuize(){
//     nextButton.style.display = "none";
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

// startQuize()