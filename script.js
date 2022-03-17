// const button1 = document.getElementById('button1')
// const button2 = document.getElementById('button2')
// const button3 = document.getElementById('button3')
// const button4 = document.getElementById('button4')
const startButton = document.getElementById('startButton')
const buttons = document.querySelectorAll('.button')
let pointCounter = document.querySelector('.pointCounter')
let promptBox = document.querySelector('.promptBox')
// let buttonBoxes = document.getElementsByClassName('buttonBoxes')
let questionNumber = 0
let points = 0
let correctAnswer = true
let wrongAnswer = false
//<------Questions------>//
const questions = [
    {
        question: ["The very first Legend of Zelda was released in 1986 on the NES",    //0 also starts the game on a click. FIX later
                   "The Legend of Zelda Breath of The Wild can technically be beaten in 30 minuets or less",   //1
                   "In the Legend of Zelda Twilight Princess, Zelda is a playable chracter",   //2
                   "During the section when you sneak in to the castle in OOT, what other Nintendo chracter can you see as a painting on the wall",  //3
                   "The very first Legend of Zelda was released in 1986 on the NES", //4
                   "Test question", //5
                   "Test question", //6
                   "Test question", //7
                   "Test question", //8
                   "Test question", //9
                   "Test question", //10
                   "Test question", //11
                   "Test question", //12
    
    ] 
        
    }

 
]



function questionOne(){
   

}


//<------ Question Function ------>//

function questionPrompts(questionNum = 0) {
   
       }

    

    
questionPrompts()
//<------ Question Function ------>

//<------ Question Cycle Function ------>
function nextQuestion() {
    promptBox.innerText = questions[0].question[questionNumber]
    

    
    
    
}   
//<------Buttons------>//
buttons.forEach((button, i) => button.addEventListener('click', () => clickMe(i)))
function clickMe(i) {
    console.log(i);
    questionNumber ++
    nextQuestion()
    questionOne()

}
//<------Buttons------>//
