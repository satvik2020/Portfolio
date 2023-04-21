

(() =>{
 
  const openNavMenu = document.querySelector(".open-nav-menu"),
  closeNavMenu = document.querySelector(".close-nav-menu"),
  navMenu = document.querySelector(".nav-menu"),
  menuOverlay = document.querySelector(".menu-overlay"),
  mediaSize = 991;

  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  // close the navMenu by clicking outside
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
  	navMenu.classList.toggle("open");
  	menuOverlay.classList.toggle("active");
  	document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") && 
      	window.innerWidth <= mediaSize){
      	// prevent default anchor click behavior
      	event.preventDefault();
      	const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains("active")){
        	collapseSubMenu();
        }
        else{
          // collapse existing expanded menuItemHasChildren
          if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
  });
  function collapseSubMenu(){
  	navMenu.querySelector(".menu-item-has-children.active .sub-menu")
  	.removeAttribute("style");
  	navMenu.querySelector(".menu-item-has-children.active")
  	.classList.remove("active");
  }
  function resizeFix(){
  	 // if navMenu is open ,close it
  	 if(navMenu.classList.contains("open")){
  	 	toggleNav();
  	 }
  	 // if menuItemHasChildren is expanded , collapse it
  	 if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
     }
  }

  window.addEventListener("resize", function(){
     if(this.innerWidth > mediaSize){
     	resizeFix();
     }
  });

})();


const chatbox = document.querySelector(".chat-box")
const chaticon = document.querySelector(".chat-icon")
const question1 = document.querySelector(".question1")
const question2 = document.querySelector(".question2")
const question3 = document.querySelector(".question3")
const question4 = document.querySelector(".question4")
const option1 = document.querySelector(".option1")
const option2 = document.querySelector(".option2")
const option3 = document.querySelector(".option3")
const option4 = document.querySelector(".option4")
const option5 = document.querySelector(".option5")
const option6 = document.querySelector(".option6")
const option7 = document.querySelector(".option7")
const option8 = document.querySelector(".option8")
const option9 = document.querySelector(".option9")
const option10 = document.querySelector(".option10")
const option11 = document.querySelector(".option11")
const option12 = document.querySelector(".option12")
const option13 = document.querySelector(".option13")
const option14 = document.querySelector(".option14")
const option15 = document.querySelector(".option15")
const answer1 = document.querySelector(".answer1")
option1.addEventListener('click', function () {
  
     window.location = "index.html";
     answer1.innerHTML = option1.value;
})

option3.addEventListener('click', function () {
      answer1.innerHTML = option3.value;
  window.location = "about us.html";
 
  
})

chaticon.addEventListener('click',function () {
  chatbox.classList.add('active')
})

option2.addEventListener('click', function () {
  answer1.innerHTML = option2.value;
  option4.classList.remove("hidden")
  option5.classList.remove("hidden")
  option6.classList.remove("hidden")

  question2.classList.remove("hidden")
})

option4.addEventListener('click', function () {
  
  var x = "Class 9";
  option10.classList.remove("hidden")
  option9.classList.remove("hidden")
  option8.classList.remove("hidden")
option7.classList.remove("hidden")
  
  question3.classList.remove("hidden")
})
option5.addEventListener('click', function () {
  
  var x = "Class 10";
  option10.classList.remove("hidden")
  option9.classList.remove("hidden")
  option8.classList.remove("hidden")
  option11.classList.remove("hidden")
  option12.classList.remove("hidden")
  option7.classList.remove("hidden")
  question3.classList.remove("hidden")
})
option6.addEventListener('click', function () {
  
  var x = "Class 11";
  option10.classList.remove("hidden")
  option9.classList.remove("hidden")
  option8.classList.remove("hidden")
  
  option7.classList.remove("hidden")
  question3.classList.remove("hidden")
})
option7.addEventListener('click', function () {
  
  var x = "Class 12";
  option10.classList.remove("hidden")
  option9.classList.remove("hidden")
  option8.classList.remove("hidden")
  option11.classList.remove("hidden")
  option12.classList.remove("hidden")
  
  question3.classList.remove("hidden")
})

option8.addEventListener('click', function () {
var y = "Maths";
option15.classList.remove("hidden")
option14.classList.remove("hidden")
option13.classList.remove("hidden")
question4.classList.remove("hidden")

})

option9.addEventListener('click', function () {
  var y = "Science";
  option15.classList.remove("hidden")
  option14.classList.remove("hidden")
  option13.classList.remove("hidden")
  question4.classList.remove("hidden")
  
  })

  option10.addEventListener('click', function () {
    var y = "Sst";
    option15.classList.remove("hidden")
    option14.classList.remove("hidden")
    option13.classList.remove("hidden")
    question4.classList.remove("hidden")
    
    })

    option11.addEventListener('click', function () {
      var y = "English";
      option15.classList.remove("hidden")
      option14.classList.remove("hidden")
      option13.classList.remove("hidden")
      question4.classList.remove("hidden")
      
      })

      option12.addEventListener('click', function () {
        var y = "Hindi";
        option15.classList.remove("hidden")
        option14.classList.remove("hidden")
        option13.classList.remove("hidden")
        question4.classList.remove("hidden")
        
        })

        option13.addEventListener('click', function () {
         if(x == "Class 9"  ){
           if (y == "Maths") {
              window.open("https://www.cuemath.com/ncert-solutions/class-9-maths/",_blank);
           }
          
         }
          })