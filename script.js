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
        question: "What year was the very first zelda released?",
        answer : [
            {text: '1986', correct: true},
            {text: '1984', correct: false},
            {text: '1989', correct: false},
            {text: '1991', correct: false}
        ]
    },

    {
        question: "In The Legend of Zelda Oricina of Time, What is the first song that you learn?",
        answer: [
            {text: 'Zeldas Lullaby', correct: false},
            {text: 'Saras Song', correct: true},
            {text: 'Song of Storms', correct: false},
            {text: 'Ephonas Song', correct : false}

        ],
           
    }
]
let correctAnswer 
function questionPrompts(questionNum = 0) {
    promptBox.innerText = questions[questionNum].question
    correctAnswer = questions[questionNum].answer.filter((ans, i) => {if(ans.correct)return i})[0]
}

questionPrompts()

//<------Buttons------>//
buttons.forEach((button, i) => button.addEventListener('click', () => clickMe(i)))


function clickMe(i) {
    console.log(i);

}
//<------Buttons------>//