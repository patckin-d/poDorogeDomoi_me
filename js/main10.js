let question = document.getElementsByClassName("question")[0];

let arrayQuestions = [
    "Как выглядит Бог?",
    "Какого цвета Его румянец от поцелуев?",
    "Ты помнишь, как пахнет персик?"
]
let arrayAnswer = ["", "", ""];
let inputUs = document.getElementsByClassName("inputUser")[0];

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
    })
}

changeQuestion()

let btn = document.getElementsByClassName("btn")[0];
btn.onclick = saveAnswer;