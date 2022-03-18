// const button1 = document.getElementById('button1') === true
// const button2 = document.getElementById('button2') === false
// const button3 = document.getElementById('button3')
// const button4 = document.getElementById('button4')
// const startButton = document.getElementById('startButton')
// const buttons = document.querySelectorAll('.button')
// let pointCounter = document.querySelector('.pointCounter')
// let promptBox = document.querySelector('.promptBox')
// let answerBox = document.querySelector('.answerBox')
// let buttonBoxes = document.getElementsByClassName('buttonBoxes')
// let questionNumber = 0
// let points = 0
// const correctAnswer = true
// const wrongAnswer = false
// const answerButton = document.getElementsByClassName('answerButton')
const myQuestions = [
    {
        question : "What year was the orginal The Legend of Zelda Released?",
        answers: {
            a: '1986',
            b: '1984',
            c: '1991'
        },
        correctAnwer: 'a'
    },
    {
        question : "What is the name of Link's most famous sword?",
        answers: {
            a: 'The Master Sword',
            b: 'Bigorn Sword',
            c: 'Kakirio Sword'
        },
        correctAnwer: 'a'
    },
    {
        question: "What is the name of Links horse throught most flagship tittles?",
        answers: {
            a: 'Butter-cup',
            b: 'Charlie-Horse',
            c: 'Ephona'
        },
        correctAnwer: 'c'
    },
    {
        question: "In The Legend of Zelda Breath of the Wild, What is the name of the giant red Zora that you meet on your journey?",
        answers : {
            a: 'Princess Ruto',
            b: 'Prince Sidon',
            c: 'Tingle'
        },
        correctAnwer: 'b'
    }
];
let quizStuff = document.getElementById('quiz');
    let resultsStuff = document.getElementById('res');
    let checkAnswersButton = document.getElementById('button')



    
    function questionPrompts(questions, quizBox, resultsBox, checkAnswersButton){
        //put stuff here//
        let output = [];
        let answers;

        for (let i = 0; i < questions.length; i++){
           answers = [];
           for(letter in questions[i].answers){ //<-----FIX THIS ASAP

                answers.push(
                    '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
                );
            }

            output.push(
            '<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
            );
            
        }
        quizBox.innerHTML = output.join('');
    }
    // questionPrompts(questions, quizBox)


    function results(questions, quizBox, resultsBox) {
        //put stuff here//
        let quizAnswers = quizBox.querySelectorAll('.answers')

        let userAns = ''
        let numberRight = 0;

        for(let i =0; i<questions.length; i++){
            userAns = (quizAnswers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            if(userAns===questions[i].correctAnswer){
                numberRight++;

                quizAnswers[i].style.color= 'darkgreen';
            }
            else{
                quizAnswers[i].style.color= 'red';
            }
        }

        resultsBox.innerHTML= numberRight + 'out of' + questions.length;
    }


    //This will show questions//
    


    // let quizStuff = document.getElementById('quiz');
    // let resultsStuff = document.getElementById('res');
    // let checkAnswersButton = document.getElementsByClassName('button')

    
    checkAnswersButton.onlick = function(){
        console.log('working');   
        results(myQuestions,quizBox,resultsBox)}
    
    
    
    
    questionPrompts(myQuestions, quizBox, resultsBox, checkAnswersButton)
    questionPrompts(myQuestions,quizBox);
    startQuiz(questionObjects, quizStuff, resultsStuff, checkAnswersButton)
    
    
    
    
    
    
    
    
    
    
    
    
    
        //This will show results on a click 
    // checkAnswersButton.addEventListener('click', startQuiz())
    //     results(questionObjects,quizBox,resultsBox);
    
    // startQuiz()
    
    

// checkAnswersButton.addEventListener('click', startQuiz){
//     results(questions,quizBox,resultsBox);
// }









// const questionObjects = [
//     {
//         question : "What year was the orginal The Legend of Zelda Released?",
//         answers: {
//             a: '1986',
//             b: '1984',
//             c: '1991'
//         },
//         correctAnwer: 'a'
//     },
//     {
//         question : "What is the name of Link's most famous sword?",
//         answers: {
//             a: 'The Master Sword',
//             b: 'Bigorn Sword',
//             c: 'Kakirio Sword'
//         },
//         correctAnwer: 'a'
//     },
//     {
//         question: "What is the name of Links horse throught most flagship tittles?",
//         answers: {
//             a: 'Butter-cup',
//             b: 'Charlie-Horse',
//             c: 'Ephona'
//         },
//         correctAnwer: 'c'
//     },
//     {
//         question: "In The Legend of Zelda Breath of the Wild, What is the name of the giant red Zora that you meet on your journey?",
//         answers : {
//             a: 'Princess Ruto',
//             b: 'Prince Sidon',
//             c: 'Tingle'
//         },
//         correctAnwer: 'b'
//     }
// ]































//<------Questions------>//







































// //<------ Question Function ------>//

// function questionPrompts(questionNum = 0) {
// }

// questionPrompts()
// //<------ Question Function ------>

// //<------ Question Cycle Function ------>
// function nextQuestion() {
//     promptBox.innerText = questions[0].question[questionNumber]
// }   
// //<------Buttons------>//
// buttons.forEach((button, i) => button.addEventListener('click', () => clickMe(i)))
// function clickMe(i) {
//     console.log(i);
//     console.log(questions);
//     questionNumber ++
//     nextQuestion()
// }
// //<------Buttons------>//










//<----- Questions for later ------>//


  // {
    //     question : `The very first Legend of Zelda was released in 1986 on the NES`,
    //     correct: true
    //  },

    //  {
    //      question: `The Legend of Zelda Breath of The Wild can technically be beaten in 30 minuets or less`,
    //      correct: true
    //  },

    //  {
    //      question: `During the section when you sneak in to the castle in OOT, what other Nintendo chracter can you see as a painting on the wall`, //palceholder
    //      correct: true
    //  },
     
    //  {
    //     question: `The very first Legend of Zelda was released in 1986 on the SNES`,
    //     correct: false
    //  },

    //  {
    //     question: `Test question`,
    //     correct: true
    //  },

    //  {
    //     question: `Test question`,
    //     correct: true
    //  },

    //  {
    //     question: `Test question`,
    //     correct: true
    //  },

    //  {
    //     question: `Test question`,
    //     correct: true
    //  },

    //  {
    //     question: `Test question`,
    //     correct: true
    //  },

    //  {
    //     question: `Test question`,
    //     correct: true
    //  },

    //  {
    //     question: `Test question`,
    //     correct: true
    //  }









    // const questions = [
    //     { 
    //      question: ["The very first Legend of Zelda was released in 1986 on the NES",    //0 also starts the game on a click. FIX later
    //                     "The Legend of Zelda Breath of The Wild can technically be beaten in 30 minuets or less",   //1
    //                     "In the Legend of Zelda Twilight Princess, Zelda is a playable chracter",   //2
    //                     "During the section when you sneak in to the castle in OOT, what other Nintendo chracter can you see as a painting on the wall",  //3
    //                     "The very first Legend of Zelda was released in 1986 on the NES", //4
    //                     "Test question", //5
    //                     "Test question", //6
    //                     "Test question", //7
    //                     "Test question", //8
    //                     "Test question", //9
    //                     "Test question", //10
    //                     "Test question", //11
    //                     "Test question", //12
         
    //      ]
    //     } 
     
