const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
const extreme = document.getElementById("extreme");
const input = document.getElementById("guess");
const submit = document.getElementById("submitbtn");
const splash = document.getElementById("splashscreen");
const main = document.getElementById("mainscreen");
const next = document.getElementById("next");
const back = document.getElementById("Back");
var num;
var guesses = 0;
var checkguess = 0;
var score = 0;
var hiscore = 0;

easy.addEventListener('click',() =>{
   splash.style.display = "none";
   main.style.display ="block";
   guesses = 5;
   num = Math.floor(Math.random() *100) + 1;
   console.log(num);
   document.getElementById("guessno").innerText = guesses + " ";
   checkguess= 5;
   document.getElementById("hiscore").innerText = localStorage.getItem("hiscore");
})


hard.addEventListener('click',() =>{
    splash.style.display = "none";
    main.style.display ="block";
    guesses = 3;
    num = Math.floor(Math.random() *100) + 1;
    console.log(num);
    document.getElementById("guessno").innerText = guesses + " ";
    checkguess= 3;
    document.getElementById("hiscore").innerText = localStorage.getItem("hiscore");
 })

 
extreme.addEventListener('click',() =>{
    splash.style.display = "none";
    main.style.display ="block";
    guesses = 1;
    num = Math.floor(Math.random() *100) + 1;
    console.log(num);
    document.getElementById("guessno").innerText = guesses + " ";
    checkguess= 1;
    document.getElementById("hiscore").innerText = localStorage.getItem("hiscore");
 })

back.addEventListener('click',() => {
    location.reload();

})

submit.addEventListener("click",() =>{
var text = input.value;
console.log(text);
console.log(num);
if(text > 100){
    alert("Invalid Number");
}else if(num == text){
  score = score + 1;
 
  document.getElementById("wrongcorrect").innerText = "Correct answer! It is " + num;
  document.getElementById("score").innerText = score;
  next.style.display= "inline-block";
  guesses = checkguess;
  localStorage.setItem("hiscore",hiscore);
  if(score > hiscore){
    hiscore = score;
    localStorage.setItem("hiscore",hiscore);
  }
  document.getElementById("hiscore").innerText = localStorage.getItem("hiscore");

}else if(num != text && text != ''){
    guesses = guesses - 1;
    document.getElementById("guessno").innerText = guesses +" ";
    if(guesses == 0){
        input.value= "";
        document.getElementById("wrongcorrect").innerText = "Wrong answer! It is " + num;
        document.getElementById("lessmore").innerText  = " ";
        location.reload();
    }else if(guesses != 0 ){
        if (text < num) {
            document.getElementById("lessmore").innerText  = "More than " + text;
        }
        else if(text > num){
            document.getElementById("lessmore").innerText  = "Less than " + text;
        }
    }
  }

} 

)



next.addEventListener('click' , () => {
    input.value= "";
    
    document.getElementById("guessno").innerText = checkguess +" ";
    document.getElementById("wrongcorrect").innerText  = "";
    num = Math.floor(Math.random() *100) + 1;
    console.log(num);
    next.style.display = "none";
})
