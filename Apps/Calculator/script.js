var calculator = document.querySelector(".calculator");
var themetoggle = document.querySelector(".theme-toggler");
var display = document.querySelector("#display");
var button = document.querySelectorAll('button');


button.forEach((item) => {
    item.onclick = () => {
          if (item.id == 'clear') {
            display.innerHTML = '';
          } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0,string.length-1)
          }else if(display.innerText != '' && item.id == 'equal'){
                    display.innerText = eval(display.innerHTML);
          }else if(display.innerText == '' && item.id == 'equal'){
            display.innerText = "Empty!";
            setTimeout(() => {
                display.innerText = "";
            },2000);
          }else{
            display.innerText += item.id;
          }

    
    }
})