let q1 = "летели облака?";
let q2 = "летели далеко?"
let q3 = "как мамина рука?"
let answer1 = "";
let answer2 = "";
let answer3 = "";

function getQuestion(){
    if(answer1 == ""){
        console.log(q1);
    }else if (answer2 == ""){
        console.log(q2);
    } else if( answer3 == ""){
        console.log(q3);
    }
}
getQuestion();

function getAnswer(answer){
    if(typeof answer != "string"){
        return
    }

    if (answer1 == ""){
        answer1 = answer;
        getQuestion(); 
    } else if(answer2 == ""){
        answer2 = answer;
        getQuestion();
    } else if(answer3 == ""){
        answer3 = answer;
        getQuestion();
    }
}
