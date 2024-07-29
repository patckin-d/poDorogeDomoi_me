let question = document.getElementsByClassName("question")[0];
let answer1 ="";
let answer2 ="";
let answer3 ="";

function changeQuestion(){
    if (answer1 == ""){ 
        question.textContent = "Как выглядит Бог?";
    } else if(answer2 == ""){ 
        question.textContent = "Какого цвета Его румянец от поцелуев?";
    } else if(answer3 == ""){
        question.textContent = "Ты помнишь, как пахнет персик?";
    }
}

function saveAnswer(){
    let inputUs = document.getElementsByClassName("inputUser")[0];
    if(answer1 == ""){
        answer1 = inputUs.value;
    } else if(answer2 == ""){
        answer2 = inputUs.value;
    } else if(answer3 == ""){
        answer3 = inputUs.value;
    }
    
    inputUs.value = "";
    changeQuestion();
}

changeQuestion();

let btn = document.getElementsByClassName("btn")[0];
btn.onclick = saveAnswer;