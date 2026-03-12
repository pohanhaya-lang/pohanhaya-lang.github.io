let current = 0;

function loadQuestion(){

document.getElementById("question").innerText = questions[current].question;

for(let i=0;i<4;i++){
document.getElementById("a"+i).innerText = questions[current].answers[i];
}

}

function checkAnswer(i){

if(i == questions[current].correct){
alert("سم ځواب!");
}
else{
alert("غلط ځواب");
}

}

function nextQuestion(){

current++;

if(current >= questions.length){
alert("ازموینه ختمه شوه");
current = 0;
}

loadQuestion();

}

loadQuestion();
