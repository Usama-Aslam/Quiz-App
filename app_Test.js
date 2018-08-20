var questions = [
    {

        "question": "How to create alert box?",
        "option1": "alert='hello world'",
        "option2": "aler('hello world')",
        "option3": "alert.('hello world')",
        "option4": "alert('hello world')",
        "answer": "4"
    },
    {

        "question": "How to create variable?",
        "option1": "variable name = 'ali'",
        "option2": "var name = 'ali'",
        "option3": "variable: 'ali'",
        "option4": "variable. 'ali'",
        "answer": "2"
    },
    {

        "question": "How to create function?",
        "option1": "Function(){}",
        "option2": "function.create()",
        "option3": "function(){}",
        "option4": "function{}",
        "answer": "3"
    },
    {

        "question": "How to push value in array?",
        "option1": "arr.push(value)",
        "option2": "arr.push.value",
        "option3": "arr.(value)",
        "option4": "arr.value.push(value)",
        "answer": "1"
    },
    {

        "question": "What is javascript",
        "option1": "programming language",
        "option2": "scripting language",
        "option3": "codding language",
        "option4": "web language",
        "answer": "2"
    }
];
var question = document.getElementById('question');
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

var quizContainer = document.getElementById("quizContainer");
var resultContainer = document.getElementById("resultContainer");
resultContainer.style.display = "none";

question.innerHTML ="1: "+questions[0].question;
option1.innerHTML = questions[0].option1;
option2.innerHTML = questions[0].option2;
option3.innerHTML = questions[0].option3;
option4.innerHTML = questions[0].option4;

var load = 0;
var correct = 0;
var score;
function next() {
    var val = document.querySelector("input[name='option']:checked");
    if (val == null) {
        alert("select Any Answer");
    }
    else {
        if (questions[load].answer === val.value) {
            correct++;
        }
        if (questions.length - 1 == load) {
            score = correct * 20;
            document.getElementById("quizContainer").style.display = "none";
            resultContainer.style.display = "block";
            var b=resultContainer.getElementsByTagName("p");
            b[0].innerHTML="Total Correct Answers " +correct;
            document.getElementById("score").innerHTML = "Your score is " + score + "%";
        }
        else {
            load++;
            val.checked=false;
            question.innerHTML =load+1+": "+ questions[load].question;
            option1.innerHTML = questions[load].option1;
            option2.innerHTML = questions[load].option2;
            option3.innerHTML = questions[load].option3;
            option4.innerHTML = questions[load].option4;
        }
    }
}
window.onload = function timer() {
    var timer = document.getElementById("timer");
    var sec = 59;
    var min = 5;
    timer.innerHTML = min + " : " + sec;
    var timeStart = setInterval(function (){
        timer.innerHTML = min + " : " + sec;
        sec--;
        if (sec == 0) {
            sec = 60;
            min--;
            if (min < 0) {
                clearInterval(timeStart);
                score = correct * 20;
                document.getElementById("quizContainer").style.display = "none";
                resultContainer.style.display = "block";
                var p=resultContainer.getElementsByTagName("p");
                p[0].innerHTML="Total Correct Answers " +correct;
                document.getElementById("score").innerHTML = "Your score is " + score + "%";
            }
        }
        if(min<1){
            timer.style.color="red";
        }
    },1000);
};