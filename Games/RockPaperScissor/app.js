var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");
var btn = document.querySelector(".btn");
var rps;
var scoreyou = 0;
var scorecomp = 0;



rock.addEventListener('click',() =>{
     rps = "rock";
var random = Math.floor(Math.random() * 3) + 1;




console.log(random);
if (random == 3) {
  var worku = document.createElement("div");
  worku.setAttribute('class',"result-selection winner");
  worku.innerText = "✊";
  var workc = document.createElement("div");
  workc.innerText = "✌";
  workc.setAttribute('class',"result-selection")
  document.querySelector(".results").appendChild(worku);
  document.querySelector(".results").appendChild(workc);

  //Show Score
  scoreyou = scoreyou + 1;

  document.querySelector(".result-score-you").innerText = scoreyou;
}
if (random == 2) {
    var worku = document.createElement("div");
    worku.setAttribute('class',"result-selection");
    worku.innerText = "✊";
    var workc = document.createElement("div");
    workc.innerText = "✋";
    workc.setAttribute('class',"result-selection winner")
    document.querySelector(".results").appendChild(worku);
    document.querySelector(".results").appendChild(workc);

    
  scorecomp = scorecomp + 1;

  document.querySelector(".result-score-comp").innerText = scorecomp;
}
if (random == 1) {
    var worku = document.createElement("div");
    worku.setAttribute('class',"result-selection winner");
    worku.innerText = "✊";
    var workc = document.createElement("div");
    workc.innerText = "✊";
    workc.setAttribute('class',"result-selection winner")
    document.querySelector(".results").appendChild(worku);
    document.querySelector(".results").appendChild(workc);
}
})



paper.addEventListener('click',() =>{
    rps = "rock";
var random = Math.floor(Math.random() * 3) + 1;

console.log(random);
if (random == 3) {
 var worku = document.createElement("div");
 worku.setAttribute('class',"result-selection");
 worku.innerText = "✋";
 var workc = document.createElement("div");
 workc.innerText = "✌";
 workc.setAttribute('class',"result-selection winner")
 document.querySelector(".results").appendChild(worku);
 document.querySelector(".results").appendChild(workc);
 
 scorecomp = scorecomp + 1;

 document.querySelector(".result-score-comp").innerText = scorecomp;
}
if (random == 2) {
   var worku = document.createElement("div");
   worku.setAttribute('class',"result-selection winner");
   worku.innerText = "✋";
   var workc = document.createElement("div");
   workc.innerText = "✋";
   workc.setAttribute('class',"result-selection winner")
   document.querySelector(".results").appendChild(worku);
   document.querySelector(".results").appendChild(workc);
}
if (random == 1) {
   var worku = document.createElement("div");
   worku.setAttribute('class',"result-selection winner");
   worku.innerText = "✋";
   var workc = document.createElement("div");
   workc.innerText = "✊";
   workc.setAttribute('class',"result-selection")
   document.querySelector(".results").appendChild(worku);
   document.querySelector(".results").appendChild(workc);
   
  scoreyou = scoreyou + 1;

  document.querySelector(".result-score-you").innerText = scoreyou;
}
})

scissor.addEventListener('click',() =>{
    rps = "rock";
var random = Math.floor(Math.random() * 3) + 1;

console.log(random);
if (random == 3) {
 var worku = document.createElement("div");
 worku.setAttribute('class',"result-selection winner");
 worku.innerText = "✌";
 var workc = document.createElement("div");
 workc.innerText = "✌";
 workc.setAttribute('class',"result-selection winner")
 document.querySelector(".results").appendChild(worku);
 document.querySelector(".results").appendChild(workc);
 

}
if (random == 2) {
   var worku = document.createElement("div");
   worku.setAttribute('class',"result-selection winner");
   worku.innerText = "✌";
   var workc = document.createElement("div");
   workc.innerText = "✋";
   workc.setAttribute('class',"result-selection")
   document.querySelector(".results").appendChild(worku);
   document.querySelector(".results").appendChild(workc);

   scoreyou = scoreyou + 1;
   
   
  document.querySelector(".result-score-you").innerText = scoreyou;
}
if (random == 1) {
   var worku = document.createElement("div");
   worku.setAttribute('class',"result-selection");
   worku.innerText = "✌";
   var workc = document.createElement("div");
   workc.innerText = "✊";
   workc.setAttribute('class',"result-selection winner")
   document.querySelector(".results").appendChild(worku);
   document.querySelector(".results").appendChild(workc);
   
  scorecomp = scorecomp + 1;

  document.querySelector(".result-score-comp").innerText = scorecomp;
}
})