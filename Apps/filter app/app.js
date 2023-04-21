



async function getWebcam() {
    var videoSrc = await navigator.mediaDevices.getUserMedia({video:true});
    var video = document.getElementById("video");
     video.srcObject = videoSrc; 
}

getWebcam();


var canvas = document.getElementById("canvas");
var capture = document.getElementById("capture");
var Context = canvas.getContext("2d");
var blu = document.getElementById("blur");
var bright = document.getElementById("brightness");
var satur = document.getElementById("saturate");
var sepia = document.getElementById("sepia");
var invert = document.getElementById("invert");
var Contra = document.getElementById("contrast");

capture.addEventListener("click", () => {
    Context.drawImage(video,0,0,650,490);
})

blu.addEventListener("click", () => {
    canvas.style.filter= "blur(5px)";
})

bright.addEventListener("click", () => {
    canvas.style.filter= "brightness(0.4)";
})

satur.addEventListener("click", () => {
    canvas.style.filter= "saturate(30%)";
})

sepia.addEventListener("click", () => {
    canvas.style.filter= "sepia(60%)";
})

invert.addEventListener("click", () => {
    canvas.style.filter= "invert(100%)";
})

Contra.addEventListener("click", () => {
    canvas.style.filter= "contrast(200%)";
})


var down = document.getElementById("down");
down.addEventListener("click", () => {
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = Math.random(100000000000)+ '.png';
    link.click();
    Math.random(100000000000)
})


