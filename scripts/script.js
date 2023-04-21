var typed = new Typed(".multitext",{
	strings:["Web Developer","Student","Youtuber","Cuber","Chess player"],
	typeSpeed:70,
   backSpeed:70,
   backDelay:500,
   loop:true  
})


var menu  = document.getElementById("menu");

function openmenu() {
   menu.style.right = "0";
}

function closemenu(){
   menu.style.right ="-200px";
}
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
   for(tablink of tablinks){
      tablink.classList.remove("activelink");
   }
   for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
   }

   event.currentTarget.classList.add("activelink");
   document.getElementById(tabname).classList.add("active-tab");
}



const totop = document.querySelector(".to-top");
const header = document.querySelector(".header-text");
window.addEventListener("scroll",() => {
   if(window.pageYOffset> 100){
      totop.classList.add("active");
   }
   else{
      totop.classList.remove("active");
   }
 })

const scrolltop = () => {
   header.scrollIntoView({behavior:"smooth"})
}

 totop.addEventListener("click",scrolltop);


 //skills
//1st circle
 let probar = document.querySelector(".outer");
 let val = document.querySelector(".inner");

 let proval = 0;
 let proendval = 87;
 let speed = 50;


 let progress =setInterval(()=>{
    proval++;

    val.textContent = `${proval}%`

    probar.style.background = `conic-gradient(
      #4d5bf9 ${proval * 3.6}deg,
      #cadcff ${proval * 3.6}deg
    )`;

    if(proval == proendval){
      clearInterval(progress);
    }
 },speed);

 //2st circle
 let probar2 = document.querySelector(".outer2");
 let val2 = document.querySelector(".inner2");

 let proval2 = 0;
 let proendval2 = 84;
 let speed2 = 50;


 let progress2 =setInterval(()=>{
    proval2++;

    val2.textContent = `${proval2}%`

    probar2.style.background = `conic-gradient(
      #4d5bf9 ${proval2 * 3.6}deg,
      #cadcff ${proval2 * 3.6}deg
    )`;

    if(proval2 == proendval2){
      clearInterval(progress2);
    }
 },speed2);

 //1st circle
 let probar3 = document.querySelector(".outer3");
 let val3 = document.querySelector(".inner3");

 let proval3 = 0;
 let proendval3 = 72;
 let speed3 = 50;


 let progress3 =setInterval(()=>{
    proval3++;

    val3.textContent = `${proval3}%`

    probar3.style.background = `conic-gradient(
      #4d5bf9 ${proval3 * 3.6}deg,
      #cadcff ${proval3 * 3.6}deg
    )`;

    if(proval3 == proendval3){
      clearInterval(progress3);
    }
 },speed3);

 //1st circle
 let probar4 = document.querySelector(".outer4");
 let val4 = document.querySelector(".inner4");

 let proval4 = 0;
 let proendval4 = 96;
 let speed4 = 50;


 let progress4 =setInterval(()=>{
    proval4++;

    val4.textContent = `${proval4}%`

    probar4.style.background = `conic-gradient(
      #4d5bf9 ${proval4 * 3.6}deg,
      #cadcff ${proval4 * 3.6}deg
    )`;

    if(proval4 == proendval4){
      clearInterval(progress4);
    }
 },speed4);

 //1st circle
 let probar5 = document.querySelector(".outer5");
 let val5 = document.querySelector(".inner5");

 let proval5 = 0;
 let proendval5 = 68;
 let speed5 = 50;


 let progress5 =setInterval(()=>{
    proval5++;

    val5.textContent = `${proval5}%`

    probar5.style.background = `conic-gradient(
      #4d5bf9 ${proval * 3.6}deg,
      #cadcff ${proval * 3.6}deg
    )`;

    if(proval5 == proendval5){
      clearInterval(progress5);
    }
 },speed5);



 const scriptURL = 'https://script.google.com/macros/s/AKfycbwYGJAPcRBVcd7M4exHgIqvV2Bh0vh2RUoiI3xbw6J9BALJMfqmE9ErD8SlmyTyrYINBw/exec'
 const form = document.forms['submit-to-google-sheet'];

 form.addEventListener('submit',e => {
  e.preventDefault();
  fetch(scriptURL,{method: 'POST', body: new FormData(form)}).then(response => console.log('Success!', response)).catch(error => console.log('Error!', error.message))
 })