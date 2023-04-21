var arr = [];
score  = 0;


function chart() {
    var btn = "";
    
    for (let i = 1; i < 91; i++){
       
       btn = document.createElement("button");
       btn.innerText = i;
      btn.setAttribute('id', i);
     
       document.getElementById("btns").appendChild(btn);
    }
}


chart();

function start() {
    var num = Math.floor(Math.random() *90 +1);

    score = score+1;
    console.log(score);
    for (let i = 0; i < 90; i++) {
        if (num == arr[i]) {
        
            num = Math.floor(Math.random() *90 +1);

            i =0;
        }
    }

    document.getElementById("number").innerHTML = num;
    document.getElementById(num).style.background = "green";

 
    arr.push(num);

   
}


function rest() {

    
for (let i = 0; i < arr.length -1; i++) {
    for (let j = 0; j < arr.length-1-i; j++) {
        if (arr[j] > arr[j+1]) {
        arr[j,j+1] = arr[j,j+1]
        }
        console.log(arr);
    }
}


}


