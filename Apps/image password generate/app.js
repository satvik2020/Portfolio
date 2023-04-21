const copy_text = document.getElementById("copy-text");
const btn = document.querySelector(".btn");
btn.addEventListener('click', () => {  const char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passlength = 14;
let password = "";
for (let index = 0; index < passlength; index++) {
  const randomNum = Math.floor(Math.random() * char.length); 
  password += char.substring(randomNum,randomNum+1);
  if(password.length >= passlength){
    console.log(password);
    document.getElementById("input").setAttribute("value",password);
    break;
  }
}
});



copy_text.onclick = () => {

  var invalue = document.getElementById("input").getAttribute("value");
  console.log(invalue);
  if(invalue != null){
    navigator.clipboard.writeText(invalue);
    copy_text.setAttribute('title', "Copied.");
    setTimeout(() => {
        copy_text.setAttribute('title', "Copy Text.")
    }, 2000);
  }

  else if(invalue == null){
    alert("Kindly Generate a Password First");
  }
}