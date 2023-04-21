//starting site
const turn_on = document.querySelector("#turn_on")



var temp = document.querySelector(".temp");

var start2 = document.getElementById("start_jarvis_btn");

var start = document.getElementById("startbtn");
var machine = document.getElementById("machine");


function autoJarvis() {
 //  recognition.start()
}

start.addEventListener("click", () => {
machine.style.display = "block";
start.style.display = "none";
temp.style.display = "block";
start2.style.display = "flex";
document.querySelector(".small_jarvis").style.display = "block";
let lang = navigator.language;

let dateX = new Date();
let daynumber = dateX.getDate();
let monthX= dateX.getMonth();

let dayname = dateX.toLocaleString(lang,{weekday: 'long'});
let monthname = dateX.toLocaleString(lang, {month:'long'});

document.getElementById("month").innerHTML = monthname;
document.getElementById("date").innerHTML = daynumber;
document.getElementById("day").innerHTML = dayname;
document.getElementById("year").innerHTML = dateX.getFullYear();
    turn_on.play()
    turn_on.addEventListener("onend", () =>{
        setTimeOut(() => {

            autoJarvis()
            readOut("Ready to Go Sir")
        
        },200)
    })


//elements 

const startBtn = document.getElementById("vrstart");
const stopBtn2 = document.getElementById("vrstop2");
const stopBtn = document.getElementById("vrstop");
const speakup = document.getElementById("speakup");
const time = document.getElementById("time");
const battery = document.getElementById("battery");
const internet = document.querySelector("#internet")
const msgs = document.querySelector(".messages");
//gender selector
var gender = prompt("Please enter m or f")

if(gender !== "M" && gender !== "m" && gender !== "F" && gender !== "f"){
    alert("Please enter valid detail")
    var gender = prompt("Please enter m or f")
    if (gender !== "M" && gender !== "m" && gender !== "F" && gender !== "f") {
         alert("Please enter valid detail")
    var gender = prompt("Please enter m or f")
     localStorage.setItem("gender" ,gender)
    }
    localStorage.setItem("gender" ,gender)
}else{
   
    localStorage.setItem("gender", gender)

}

var sirmaam = localStorage.getItem("gender")

if (localStorage.getItem("gender") == "M" || localStorage.getItem("gender") == "m" ) {
    localStorage.setItem("sirmaam", "sir")
}
if (localStorage.getItem("gender") == "F" || localStorage.getItem("gender") == "f" ) {
    localStorage.setItem("sirmaam", "maam")
}//weather setup
function weather(city) {
    const weatherCont = document.querySelector(".temp").querySelectorAll("*");
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2b6a000cba8f2c132008ff58f6b8ac72`
const xhr = new XMLHttpRequest()
xhr.open("GET",url,true);
xhr.onload = function () {
    if (this.status === 200) {
             let data = JSON.parse(this.responseText);
      weatherCont[0].textContent = `Location : ${data.name}`;
      weatherCont[1].textContent = `Country : ${data.sys.country}`;
      weatherCont[2].textContent = `Weather type : ${data.weather[0].main}`;
      weatherCont[3].textContent = `Weather description : ${data.weather[0].description}`;
      weatherCont[4].src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherCont[5].textContent = `Original Temperature : ${data.main.temp}°C`  ;
      weatherCont[6].textContent = `feels like ${data.main.feels_like}°C`;
      weatherCont[7].textContent = `Min temperature ${data.main.temp_min}°C`;
      weatherCont[8].textContent = `Max temperature ${data.main.temp_max}°C`;
      weatherStatement = `sir the weather in ${data.name} is ${
        data.weather[0].description
      } and the temperature feels like ${data.main.feels_like}`;
    } else {
      weatherCont[0].textContent = "Weather Info Not Found";
    }
  };

xhr.send()

}
// Jarvis User Chat
function createMsg(who,msg){
let newmsg = document.createElement("p");
newmsg.innerText = msg;
newmsg.setAttribute("class",who); 
let br= document.createElement("br");
msgs.appendChild(newmsg)
msgs.appendChild(br);
msgs.appendChild(br);
msgs.appendChild(br);
}
//Friday | Jarvis Commands
let fridayComs = [];
fridayComs.push("hi friday");
fridayComs.push("show commands");
fridayComs.push("close this - to close opened popups");
fridayComs.push(
  "open my information - information regarding your acoounts and you"
);
fridayComs.push("whats the weather or temperature");
fridayComs.push("show the full weather report");
fridayComs.push("are you there - to check fridays presence");
fridayComs.push("shut down - stop voice recognition");
fridayComs.push("open google");
fridayComs.push('search for "your keywords" - to search on google ');
fridayComs.push("open whatsapp");
fridayComs.push("open youtube");
fridayComs.push('play "your keywords" - to search on youtube ');
fridayComs.push("close this youtube tab - to close opened youtube tab");
fridayComs.push("open firebase");
fridayComs.push("open netlify");
fridayComs.push("open twitter");
fridayComs.push("open my twitter profile");
fridayComs.push("open instagram");
fridayComs.push("open my instagram profile");
fridayComs.push("open github");
fridayComs.push("open my github profile");
fridayComs.push("close commands - to close commands tab");
//Time setup
let d2 = new Date;
    var sec2 = d2.getSeconds();
      var min2 = d2.getMinutes();
        var hr2 = d2.getHours();
        var AMPM2 = "AM"
     
          if(sec2 < 10){
       sec2 = "0" + sec2;

      }
      if(hr2 >12){
       var AMPM2 = "PM"
      }
       time.innerHTML=  hr2+ ":" + min2 + ":" + sec2  + " " +  AMPM2;
intBatt()

setInterval( () => {
    let d = new Date;
    var sec = d.getSeconds();
      var min = d.getMinutes();
        var hr = d.getHours();

        var AMPM = "AM"
         if(sec < 10){
       sec = "0" + sec;

      }
      if(hr >12){
       var AMPM = "PM"
      }
      time.innerHTML=  hr + ":" + min + ":" + sec+ " " + AMPM;
    
       
},1000)

function intBatt(){

    
     navigator.getBattery().then(batterycallback);

 function batterycallback(batteryobject) {
        printBatteryStatus(batteryobject)
        setInterval(() => {
            printBatteryStatus(batteryobject)

        },5000)
     }
function printBatteryStatus(batteryobject) {
    var batteryLevel = Math.ceil(batteryobject.level * 100)
   battery.textContent = `${batteryLevel}%`
   if (batteryobject.charging = true){ 
    document.querySelector("#battery").style.width = "175px"
          battery.textContent = `${batteryLevel}% Charging`
   }
    else if (batteryobject.charging = false) {
       battery.textContent = `${batteryLevel}% Unplugged`
   }
}


var connectivity = null;


navigator.onLine ? (internet.textContent = "Online" ) : (internet.textContent = "Offline")

setInterval(() => {

navigator.onLine ? (internet.textContent = "Online") : (internet.textContent = "Offline")
},60000)

}
//Jarvis Setup
if (localStorage.getItem("jarvis_setup") !== null) {
     weather(JSON.parse(localStorage.getItem("jarvis_setup")).location)
}

//Jarvis Information Setup

const setup = document.querySelector(".jarvis_setup")
setup.style.display = "none"

if  (localStorage.getItem("jarvis_setup") === null) {
 setup.style.display = "block"
 setup.querySelector("button").addEventListener('click', UserInfo)
 let gen = localStorage.getItem("sirmaam")
                readOut(` kindly fill up the form ${gen}`)
            
}


//userinfo func

function UserInfo() {
    let setupInfo = {
        name : setup.querySelectorAll("input")[0].value,
        bio: setup.querySelectorAll("input")[1].value,
        location : setup.querySelectorAll("input")[2].value,
        instagram : setup.querySelectorAll("input")[3].value,
        twitter: setup.querySelectorAll("input")[4].value,
        github: setup.querySelectorAll("input")[5].value
    }

    let testArr = [
            
        ]

    setup.querySelectorAll("input").forEach((e) =>{
         testArr.push(e.value)
    })

    if (testArr.includes("")) {
        readOut("sir enter your complete information")
    }else{
        localStorage.clear()

        localStorage.setItem("jarvis_setup",JSON.stringify(setupInfo))
        setup.style.display = "none";
        weather(JSON.parse(localStorage.getItem("jarvis_setup")).location)
    }
}


function er() {
          let setupInfo = {
        name : setup.querySelectorAll("input")[0].value,
        bio: setup.querySelectorAll("input")[1].value,
        location : setup.querySelectorAll("input")[2].value,
        instagram : setup.querySelectorAll("input")[3].value,
        twitter: setup.querySelectorAll("input")[4].value,
        github: setup.querySelectorAll("input")[5].value
    }

    let testArr = [
            
        ]

    setup.querySelectorAll("input").forEach((e) =>{
         testArr.push(e.value)
    })

    if (testArr.includes("")) {
        readOut("sir enter your complete information")
    }else{
        localStorage.clear()

        localStorage.setItem("jarvis_setup",JSON.stringify(setupInfo))
        setup.style.display = "none";
        weather(JSON.parse(localStorage.getItem("jarvis_setup")).location)
    }
}
// Speech  Recognition Setup

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.continuous = true;
//sr start
recognition.onstart = function () {

    console.log("vr active");
} 

//sr result
recognition.onresult = function (batteryobject) {
    console.log(event);
     let batteryper =  Math.ceil(batteryobject.level * 100);
     
    let ti = document.getElementById("time").innerText;
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    let userdata = localStorage.getItem("jarvis_setup")
    let gen = localStorage.getItem("sirmaam")

    transcript = transcript.toLowerCase();
    console.log(`my words: ${transcript}`);

    createMsg("usermessage",transcript)
    if (transcript.includes("hi")) {
        readOut(`hello,how are You ${gen}?`)  ;
    }
    else if (transcript.includes("hello")) {
        readOut(`hello,how are You ${gen}? `)  ;
    }
    else if  (transcript.includes("i am fine")) {
        readOut(`Great to hear that from you ${gen},how may i help you today`);  
    }
    
    else if  (transcript.includes("open youtube")) {
        readOut(`Opening Youtube ${gen}`);  
        window.open("https://www.youtube.com")
    }

    else if  (transcript.includes("open google")) {
        readOut(`Opening Google ${gen}`);  
        window.open("https://www.google.com")
    }

    
    else if  (transcript.includes("open firebase")||transcript.includes("open fire base")||transcript.includes("open 5 base") || transcript.includes("open fireways") || transcript.includes("open 5s")) {
        readOut("Opening Firebase Console");  
        window.open("https://console.firebase.google.com/?pli=1")
    }

       
 else if  (transcript.includes("search for")) {
        readOut("here's the result");
        let result = transcript.split("");
        
       
        
        result.splice(0,10)
    
        result  = result.join("").split(" ").join("+");
        console.log(result)
        window.open(`https://www.google.com/search?q=${result}`)
    }
   
   else if  (transcript.includes("play")) {
        readOut("here's the result");
        let result = transcript.split("");
        
             
         result.splice(0,5)
        
        result  = result.join("").split(" ").join("+");
        console.log(result)
        window.open(`https://www.youtube.com/results?search_query=${result}`)
    }
     else if(transcript.includes("what's the time") || transcript.includes("what is the time")){
        readOut(`its ${ti} ${gen}`)
     }
   else if(transcript.includes("reload this page") || transcript.includes("reload the page") || transcript.includes("reload the pizza base") || transcript.includes("reload this pizza base") || transcript.includes("reload this speed") || transcript.includes("reload the speed")){
        readOut("reloading this page sir");
        location.reload();

     }

     else if(transcript.includes("open twitter")) {
        readOut(`Opening Twitter ${gen}`);  
        window.open("https://twitter.com/")
    }
     else if (transcript.includes("open my twitter account")) {
        readOut(`Opening Your Twitter Profile ${gen}`);  
        window.open(`https://twitter.com/${JSON.parse(userdata).twitter}`)
    }
         else if  (transcript.includes("open instagram")) {
        readOut(`Opening Instagram ${gen}`);  
        window.open("https://instagram.com/")
    }
     else if (transcript.includes("open my instagram account")) {
        readOut(`Opening Your instagram Profile ${gen}`);  
        window.open(`https://instagram.com/${JSON.parse(userdata).instagram}`)
    }
         else if  (transcript.includes("open github") || transcript.includes("open guitar") || transcript.includes("open get hub") || transcript.includes("open gitub")) {
        readOut(`Opening Github ${gen}`);  
        window.open("https://github.com/")
    }
     else if (transcript.includes("open my github account")||transcript.includes("open my guitar account") || transcript.includes("open my gitub account") || transcript.includes("open my gitub account")) {
        readOut(`Opening Your Github Profile ${gen}`);  
        window.open(`https://github.com/${JSON.parse(userdata).github}`)
        console.log(JSON.parse(userdata).github)
    }
    else if(transcript.includes("show commands") || transcript.includes("so commands") || transcript.includes("show command") || transcript.includes("what commands do you follow")  ){
        readOut(`Showing the list of commands ${gen}`);  
     document.querySelector(".commands").style.display = "block";
    }
     else if(transcript.includes("open my information")){
        readOut(`Opening The information tab ${gen}`);  
       setup.style.display = "block";
       localStorage.clear();
        document.getElementById("sub_btn").addEventListener('click', () =>{
            er()
        })
    }else if(transcript.includes("close commands") || transcript.includes("close command") ){
               readOut(`Closing the list of commands ${gen}`);  
     document.querySelector(".commands").style.display = "none";
    }
    else{
        readOut("Not a Command")
    }
}
//Jarvis 
fridayComs.forEach((e) => {
    document.querySelector(".commands").innerHTML +=`<p>#${e}</p><br>`
})

//calender


// sr end 
recognition.onend = function (event) {
   
    console.log("vr deactivate");
   //recognition.start();
}



startBtn.addEventListener('click', () => {
    recognition.start();
//document.getElementById("vrstop2").style.display="block";
//document.getElementById("vrstop").style.display="block";

});

stopBtn.addEventListener('click', () => {
    recognition.stop();
 //   stopBtn.style.display="none";
//    stopBtn2.style.display="none";

});


//friday speech

function readOut(message) {
    const speech = new SpeechSynthesisUtterance();
//different voices

const allVoices = speechSynthesis.getVoices();

speech.voice = allVoices[0]
    speech.text = message;
    speech.volume = 1;
   
    window.speechSynthesis.speak(speech);
        console.log("speaking out");
    
    createMsg("jmessage",message)
}

// example

//autoJarvis

//

window.onload = function(){
    readOut("    ");
   /* turn_on.play()
    turn_on.addEventListener("onend", () =>{
        setTimeOut(() => {

            autoJarvis()
            readOut("Ready to Go Sir")
            if(localStorage.getItem("jarvis_setup") === null){
                readOut("Sir kindly fill up the form sir")
            }
        },200)
    })*/
}



})

//small jarvis

const smalljarvis = document.querySelector("#small_jarvis");

smalljarvis.addEventListener("click", () => {


window.open(`${window.location.href}`,"newWindow","menubar=true,location=true,resizable=false,scrollbars=false,width=200,height=200,top=0,left=0")


})

document.querySelector(".calendar").addEventListener("click", () => {
    window.open("https://calendar.google.com")
}) 


// news setup
