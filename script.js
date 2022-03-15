// const button1 = document.getElementById('button1')
// const button2 = document.getElementById('button2')
// const button3 = document.getElementById('button3')
// const button4 = document.getElementById('button4')
const buttons = document.querySelectorAll('.button')
let pointCounter = document.querySelector('.pointCounter')
let promptBox = document.querySelector('.promptBox')
// let buttonBoxes = document.getElementsByClassName('buttonBoxes')


//<------Questions------>//
const questions = [
    {
        question: ["The very first Legend of Zelda was released in 1986 on the NES"], 
        answer : [ correct = true
            // {text: 'A: 1986', correct: true},
            // {text: 'B: 1984', correct: false},
            // {text: 'C: 1989', correct: false},
            // {text: 'D: 1991', correct: false}
        ]
    },

    // {
    //     question: "In The Legend of Zelda Oricina of Time, What is the first song that you learn?",
    //     answer: [
    //         {text: 'Zeldas Lullaby', correct: false},
    //         {text: 'Saras Song', correct: true},
    //         {text: 'Song of Storms', correct: false},
    //         {text: 'Ephonas Song', correct : false}

    //     ],
           
    // },

    // {
    //     question: ["In The Legend of Zelda Oricina of Time, What is often described as the worst temple?"],
    //     answer : [
            
    //     ]
    // }
]
//<------ Question Function ------>//
let correctAnswer 
function questionPrompts(questionNum = 0) {
    promptBox.innerText = questions[questionNum].question
    correctAnswer = questions[questionNum].answer.filter((ans, i) => {if(ans.correct)return i})[0];
       for(let correctAnswer = true; correctAnswer === true; correctAnswer++);{
           alert(`That's right!`)
       }

    
    
}
    
questionPrompts()
//<------ Question Function ------>

//<------ Question Cycle Function ------>

function nextQuestion(questionNum = 0) {
    // Event.preventDefault()
    // if(correctAnswer === correctAnswer){
    //     alert('Correct!')
    //         console.log('please work');
    // } 
}   
nextQuestion()


//<------Buttons------>//
buttons.forEach((button, i) => button.addEventListener('click', () => clickMe(i)))


function clickMe(i) {
    console.log(i);

}
//<------Buttons------>//
