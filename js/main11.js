const newEvent = new Event("thanks");

let question = document.getElementsByClassName("question")[0];

let arrayQuestions = [
    "Как выглядит Бог?",
    "Какого цвета Его румянец от поцелуев?",
    "Ты помнишь, как пахнет персик?"
]
let arrayAnswer = ["", "", ""];
let inputUs = document.getElementsByClassName("inputUser")[0];
let list = document.getElementsByClassName("list")[0];

function getList(){
    for( let i = 0; i < arrayQuestions.length; i++){
        let listElement = document.getElementsByClassName("answer-" + (i + 1))[0];
        listElement.textContent = arrayQuestions[i] + " : " + arrayAnswer[i];  
    }   
}

function findNotAnswered(callback){
    for (let i = 0; i <= arrayQuestions.length - 1; i++) {
        if (arrayAnswer[i] == ""){
            callback(i);
            break;
        }
    }
}

function changeQuestion() {
    findNotAnswered( i => question.textContent = arrayQuestions[i] )
}

function saveAnswer() {
    findNotAnswered(i => {
        arrayAnswer[i] = inputUs.value;
        inputUs.value = "";
        changeQuestion();
        showAnswerQuestions();
    })
}

function showAnswerQuestions(){
    let counter = 0; // количество неотвеченных
    arrayAnswer.forEach( (value,index,array) => {
        if(arrayAnswer[index] == ""){
            counter ++
        }  
    });

    if(counter == 0){
        list.classList.add("list-show");
    } else if( counter >=1){
    }
    console.log(counter);

    getList();
}

changeQuestion()

let btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click",()=>{
    saveAnswer();
});

let anketa = document.getElementsByClassName("anketa")[0];
anketa.addEventListener("keypress", (event)=>{
   let key = event.keyCode;
    if (key == 13) {
        saveAnswer();
        console.log(event)
    }
})

/*
    1. тест пользователя
    2. отследить текст пользователя
    3. реакция на текст пользователя
*/

let text = "спасибо"
inputUs.addEventListener("input",(event)=> {
   if( event.target.value == text ){
        document.dispatchEvent(newEvent)
   }
})

document.addEventListener("thanks", () => {
    console.log("и тебе спасибо");
});

// c == спасибо
// п == спасибо
// а == спасибо
// с == спасибо
// и == спасибо
// б == спасибо
// о == спасибо

// c == спасибо
// cп == спасибо
// cпа == спасибо











































// let customEvent = new Event("thanks");

// anketa.addEventListener("thanks", () => {
//     console.log('th')
// })

// anketa.dispatchEvent(customEvent)