// const button1 = document.getElementById('button1') 
// const button2 = document.getElementById('button2') 
// const button3 = document.getElementById('button3')
// const button4 = document.getElementById('button4')
// const startButton = document.getElementById('startButton')
const buttons = document.querySelectorAll('.button')
// let pointCounter = document.querySelector('.pointCounter')
let promptBox = document.querySelector('.promptBox')
// let answerBox = document.querySelector('.answerBox')
let buttonBoxes = document.getElementsByClassName('buttonBoxes')
let questionNumber = 0
let points = 0
// const correctAnswer = true
// const wrongAnswer = false
// const answerButton = document.getElementsByClassName('answerButton')

<<<<<<< HEAD
=======


>>>>>>> 0456f1f1d4127f452f6da92dafc3d200376363e9
function playerPoints() {
    points % 2 == 10
    points++
    document.querySelector('.pointCounter').innerHTML = `Points :${points}`
    console.log('please work');
}

    
//<------Questions------>//

 const questions = [
        { 
         question: [``,    //0 also starts the game on a click. FIX later
                        `What year was the first Legend of Zelda Released? 
                        A: 1986  
                        B: 1984
                        C: 1991
                        D: 1979`, 
                        
                        `What is the name of Link's iconic sword?
                         A: Fierce Deity's Sword
                         B: Biggoron Sword
                         C: The Master Sword
                         D: Great Fairy's Sword`, 
                        
                         `What is the name of Link's horse?
                          A: Butter-cup
                          B: Charlie-Horse
                          C: Epona
                          D: Little-foot`,
                            
                        `In The Legend of Zelda Breath of the Wild, what is the name of the giant red Zora that you meet?
                         A: Princess Ruto
                         B: Prince Sidon
                         C: Tingle
                         D: Deku`, 
                         
                        `Canonically, what is the first Legend of Zelda game
                         A: Skyward Sword
                         B: Majoras Mask
                         C: Four Swords
                         D: Wind Waker`,
                          
                        `In The Legend of Zelda Breath of The Wild, what are the mininum hearts required to pull the master sword from the stone it is in
                         A: 6 hearts
                         B: 13 hearts
                         C: 20 hears
                         D: 3 hearts`,
                         
                        `What is the name of the main antagnioist in the majority if the games?
                         A: Vati
                         B: Ganon/Gannondorf
                         C: Ghirahim
                         D: Dark Link`,

                        `Who is Zelda's alter ego?
                        A: Midna
                        B: Sheik
                        C: Tetra
                        D: C & B`,

                        `In Ocariana of Time, what is cosidred to be the most diffcuilt temple?
                        A: The Water Temple
                        B: The Fire Temple
                        C: The Shadow Temple
                        D: The Forest Temple`, 
                        
                        `Which Zelda game had its own manga?
                         A: Twilight Princess
                         B: Ocarina of Time
                         C: A Link to the past
                         D: All of the above`, 

                        `Gannondorf is the holder of the triforce of
                         A: Power
                         B: Courage
                         C: Wisdom
                         D: Fear`, 

                        `Game over!......there are no winners or losers(for now)`, 
         
         ]
        } 
     
    ]





// //<------ Question Function ------>//

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
    console.log(questions);
    questionNumber ++
    nextQuestion()
    playerPoints()
}
//<------Buttons------>//




















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
     



    // const questions = [
        //         {
        //             question : "What year was the orginal The Legend of Zelda Released?",
        //             answers: {
        //                 a: '1986',
        //                 b: '1984',
        //                 c: '1991'
        //             },
        //             correctAnwer: 'a'
        //         },
        //         {
        //             question : "What is the name of Link's most famous sword?",
        //             answers: {
        //                 a: 'The Master Sword',
        //                 b: 'Bigorn Sword',
        //                 c: 'Kakirio Sword'
        //             },
        //             correctAnwer: 'a'
        //         },
        //         {
        //             question: "What is the name of Links horse throught most flagship tittles?",
        //             answers: {
        //                 a: 'Butter-cup',
        //                 b: 'Charlie-Horse',
        //                 c: 'Ephona'
        //             },
        //             correctAnwer: 'c'
        //         },
        //         {
        //             question: "In The Legend of Zelda Breath of the Wild, What is the name of the giant red Zora that you meet on your journey?",
        //             answers : {
        //                 a: 'Princess Ruto',
        //                 b: 'Prince Sidon',
        //                 c: 'Tingle'
        //             },
        //             correctAnwer: 'b'
        //         }
        //     ];
        














//<------ New way I was working on, but it did not pan out. So I am commenting this out ------>//
// const myQuestions = [
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
// ];
// let quizStuff = document.getElementById('quiz');
//     let resultsStuff = document.getElementById('res');
//     let checkAnswersButton = document.getElementById('button')



    








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

