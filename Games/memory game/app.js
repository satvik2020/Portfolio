//btn var and div var

var mainscreen= document.querySelector('.main-screen');
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');
var extreme = document.getElementById('extreme');


easy.addEventListener('click',() => {


    mainscreen.style.display = 'block';
    document.querySelector('.welcome-screen').style.display = 'none';
   
   


let cardsArray = [
    {
        'name': 'CSS',
        'img': './images/css.png',
    },
    {
        'name': 'HTML',
        'img': './images/html5.png',
    },
    {
        'name': 'jQuery',
        'img': './images/jquery.png',
    },
    {
        'name': 'JS',
        'img': './images/js.png',
    },
    {
        'name': 'Node',
        'img': './images/nodejs.png',
    },
    {
        'name': 'Python',
        'img': './images/python.png',
    }
];


const parentDiv = document.querySelector("#card-section");
const gameCard = cardsArray.concat(cardsArray);
let shuffleChild = Array.from(gameCard).sort(() => 0.5 - Math.random());
for (let i = 0; i <shuffleChild.length; i++) {
    const childdiv = document.createElement('div');
    childdiv.classList.add('card');
    childdiv.dataset.name = shuffleChild[i].name;

   

   const frontDiv = document.createElement('div');
   frontDiv.classList.add('front-card');

   
   const backDiv = document.createElement('div');
   backDiv.classList.add('back-card');
   backDiv.style.backgroundImage = `url(${shuffleChild[i].img})`;
   parentDiv.appendChild(childdiv);
   childdiv.appendChild(frontDiv);
   childdiv.appendChild(backDiv);
}
let clickcount = 0;
let firstcard = '';
let secondcard = '';
let check =0;
let cardmatch = 0;
const settime  = () => {


let time = 45;
if(time > 0){
setInterval(() => {
    document.getElementById('timer').innerHTML = time;

time--;
//console.log(time);
if (time > 0 && document.getElementById('win').innerHTML == 'Yipee! You Won 🏆🥇') {
    time = 96;
}
else if(time<0){
    
    document.getElementById('timer').innerHTML = '';
    document.getElementById('win').style.display = 'block';
    document.getElementById('win').innerHTML = 'Sorry! you lost 😞.'
    clearInterval();
    card_matches = null;
    setTimeout(() => {
   location.reload();
    },8000)
}

},1000);
}
}
var card_matches = () => {
    let card_selected = document.querySelectorAll('.card-selected');
   let card = document.querySelectorAll('.card');
    card.forEach((elem) => {
        if (elem.classList.contains('card-selected')) {
            check++;
           // console.log(check);
        }
        if (elem.classList.contains('card-match')) {
            cardmatch++;
            //console.log(cardmatch);
          
        }
        
       })

       
       if(check == 2){
       if (card_selected) {
       // console.log(card_selected);
        card_selected.forEach((curelem) => {
            curelem.classList.add('card-match');
             })
       }

    check = 0;
}
else{
    
    check = 0;
    console.log(check);
}
if (cardmatch == 10) {
    time++;
    var win = document.getElementById('win');
    win.style.display = 'block';
win.innerText = 'Yipee! You Won 🏆🥇';

document.getElementById('timer').style.display = 'none';
clearInterval();
setTimeout(() => {
 location.reload();
},8000)

}else{
    cardmatch = null;
}

}

const resetGame = () => {
    clickcount = 0;
    firstcard = '';
    secondcard = '';
    let card_selected = document.querySelectorAll('.card-selected');
   let card = document.querySelectorAll('.card' );
  
    card_selected.forEach((curelem) => {
   curelem.classList.remove('card-selected');
    }
    
    )
}
const cards = document.querySelectorAll('.card');
parentDiv.addEventListener('click' ,(event) => {

    let  curcard  = event.target;console.log(curcard);

    let cardest = curcard.parentElement;
 //   console.log(cardest);
    if(curcard.id === 'card-section'){
        return false;
        clickcount =0;
      }else if(curcard.className === 'card'){
        return false;
        clickcount =0;
      }else{
    clickcount++;
      }
    if (clickcount< 3) {

if (clickcount === 1) {
         firstcard = curcard.parentNode.dataset.name;
         curcard.parentNode.classList.add('card-selected');
}
else{
    secondcard = curcard.parentNode.dataset.name;
    console.log(firstcard,secondcard);
    curcard.parentNode.classList.add('card-selected');
}
 if (firstcard != '' && secondcard != '') {
    if (firstcard === secondcard) {
        //curcard.classList.add('card-match');
        card_matches()
        setTimeout( () => {
        
            resetGame();
        },1000);

    }
    else{
        setTimeout( () => {

            resetGame();
        },1000);
    }
    
 } 
 
 
    }
  

   
})

settime();

} )
//hard

hard.addEventListener('click',() => {


    mainscreen.style.display = 'block';
    document.querySelector('.welcome-screen').style.display = 'none';
   
   


    let cardsArray = [
        {
            'name': 'CSS',
            'img': 'http://thapatechnical.online/logos/css.png',
        },
        {
            'name': 'HTML',
            'img': 'http://thapatechnical.online/logos/html5.png',
        },
        {
            'name': 'jQuery',
            'img': 'http://thapatechnical.online/logos/jquery.png',
        },
        {
            'name': 'JS',
            'img': 'http://thapatechnical.online/logos/js.png',
        },
        {
            'name': 'Node',
            'img': 'http://thapatechnical.online/logos/nodejs.png',
        },
        {
            'name': 'Python',
            'img': 'http://thapatechnical.online/logos/python.png',
        }
    ];
    
    
    const parentDiv = document.querySelector("#card-section");
    const gameCard = cardsArray.concat(cardsArray);
    
    const gameCard2 = gameCard.concat(gameCard);

    document.getElementById('card-section').style.gridTemplateColumns = 'repeat(6,1fr)';
   
    let shuffleChild = Array.from(gameCard).sort(() => 0.5 - Math.random());
    for (let i = 0; i <shuffleChild.length; i++) {
        const childdiv = document.createElement('div');
        childdiv.classList.add('card');
        childdiv.dataset.name = shuffleChild[i].name;
    
       
    
       const frontDiv = document.createElement('div');
       frontDiv.classList.add('front-card');
    
       
       const backDiv = document.createElement('div');
       backDiv.classList.add('back-card');
       backDiv.style.backgroundImage = `url(${shuffleChild[i].img})`;
       parentDiv.appendChild(childdiv);
       childdiv.appendChild(frontDiv);
       childdiv.appendChild(backDiv);
    }
    let clickcount = 0;
    let firstcard = '';
    let secondcard = '';
    let check =0;
    let cardmatch = 0;
    const settime  = () => {
    
    
    let time = 45;
    if(time > 0){
    setInterval(() => {
        document.getElementById('timer').innerHTML = time;
    
    time--;
    //console.log(time);
    if (time > 0 && document.getElementById('win').innerHTML == 'Yipee! You Won 🏆🥇') {
        time = 96;
    }
    else if(time<0){
        
        document.getElementById('timer').innerHTML = '';
        document.getElementById('win').style.display = 'block';
        document.getElementById('win').innerHTML = 'Sorry! you lost 😞.'
        clearInterval();
        card_matches = null;
        setTimeout(() => {
       location.reload();
        },8000)
    }
    
    },1000);
    }
    }
    var card_matches = () => {
        let card_selected = document.querySelectorAll('.card-selected');
       let card = document.querySelectorAll('.card');
        card.forEach((elem) => {
            if (elem.classList.contains('card-selected')) {
                check++;
               // console.log(check);
            }
            if (elem.classList.contains('card-match')) {
                cardmatch++;
                //console.log(cardmatch);
              
            }
            
           })
    
           
           if(check == 2){
           if (card_selected) {
           // console.log(card_selected);
            card_selected.forEach((curelem) => {
                curelem.classList.add('card-match');
                 })
           }
    
        check = 0;
    }
    else{
        
        check = 0;
        console.log(check);
    }
    if (cardmatch == 10) {
        time++;
        var win = document.getElementById('win');
        win.style.display = 'block';
    win.innerText = 'Yipee! You Won 🏆🥇';
    
    document.getElementById('timer').style.display = 'none';
    clearInterval();
    setTimeout(() => {
     location.reload();
    },8000)
    
    }else{
        cardmatch = null;
    }
    
    }
    
    const resetGame = () => {
        clickcount = 0;
        firstcard = '';
        secondcard = '';
        let card_selected = document.querySelectorAll('.card-selected');
       let card = document.querySelectorAll('.card' );
      
        card_selected.forEach((curelem) => {
       curelem.classList.remove('card-selected');
        }
        
        )
    }
    const cards = document.querySelectorAll('.card');
    parentDiv.addEventListener('click' ,(event) => {
    
        let  curcard  = event.target;console.log(curcard);
    
        let cardest = curcard.parentElement;
     //   console.log(cardest);
        if(curcard.id === 'card-section'){
            return false;
            clickcount =0;
          }else if(curcard.className === 'card'){
            return false;
            clickcount =0;
          }else{
        clickcount++;
          }
        if (clickcount< 3) {
    
    if (clickcount === 1) {
             firstcard = curcard.parentNode.dataset.name;
             curcard.parentNode.classList.add('card-selected');
    }
    else{
        secondcard = curcard.parentNode.dataset.name;
        console.log(firstcard,secondcard);
        curcard.parentNode.classList.add('card-selected');
    }
     if (firstcard != '' && secondcard != '') {
        if (firstcard === secondcard) {
            //curcard.classList.add('card-match');
            card_matches()
            setTimeout( () => {
            
                resetGame();
            },1000);
    
        }
        else{
            setTimeout( () => {
    
                resetGame();
            },1000);
        }
        
     } 
     
     
        }
      
    
       
    })
    
    settime();
    
    } )





//extreme


extreme.addEventListener('click',() => {


 mainscreen.style.display = 'block';
 document.querySelector('.welcome-screen').style.display = 'none';


    let cardsArray = [
        {
            'name': 'CSS',
            'img': 'http://thapatechnical.online/logos/css.png',
        },
        {
            'name': 'HTML',
            'img': 'http://thapatechnical.online/logos/html5.png',
        },
        {
            'name': 'jQuery',
            'img': 'http://thapatechnical.online/logos/jquery.png',
        },
        {
            'name': 'JS',
            'img': 'http://thapatechnical.online/logos/js.png',
        },
        {
            'name': 'Node',
            'img': 'http://thapatechnical.online/logos/nodejs.png',
        },
        {
            'name': 'Python',
            'img': 'http://thapatechnical.online/logos/python.png',
        }
    ];
    
    
    const parentDiv = document.querySelector("#card-section");
    const gameCard = cardsArray.concat(cardsArray);
    const gameCard2 = gameCard.concat(gameCard);
    const gameCard3 = gameCard2.concat(gameCard);
    document.getElementById('card-section').style.gridTemplateColumns = 'repeat(9,1fr)';
   
    let shuffleChild = Array.from(gameCard3).sort(() => 0.5 - Math.random());
    for (let i = 0; i <shuffleChild.length; i++) {
        const childdiv = document.createElement('div');
        childdiv.classList.add('card');

        childdiv.dataset.name = shuffleChild[i].name;
    
 
    
       const frontDiv = document.createElement('div');
       frontDiv.classList.add('front-card');
    
       
       const backDiv = document.createElement('div');
       backDiv.classList.add('back-card');

      
       backDiv.style.backgroundImage = `url(${shuffleChild[i].img})`;
       parentDiv.appendChild(childdiv);
       childdiv.appendChild(frontDiv);
       childdiv.appendChild(backDiv);

       
 
    }

    let clickcount = 0;
    let firstcard = '';
    let secondcard = '';
    let check =0;
    let cardmatch = 0;
    const settime  = () => {
    
    
    let time = 60;
    if(time > 0){
    setInterval(() => {
        document.getElementById('timer').innerHTML = time;
    
    time--;
    //console.log(time);
    if (time > 0 && document.getElementById('win').innerHTML == 'Yipee! You Won 🏆🥇') {
        time = 96;
    }
    else if(time<0){
        
        document.getElementById('timer').innerHTML = '';
        document.getElementById('win').style.display = 'block';
        document.getElementById('win').innerHTML = 'Sorry! you lost 😞.'
        clearInterval();
        card_matches = null;
        setTimeout(() => {
       location.reload();
        },8000)
    }
    
    },1000);
    }
    }
    var card_matches = () => {
        let card_selected = document.querySelectorAll('.card-selected');
       let card = document.querySelectorAll('.card');
        card.forEach((elem) => {
            if (elem.classList.contains('card-selected')) {
                check++;
               // console.log(check);
            }
            if (elem.classList.contains('card-match')) {
                cardmatch++;
                //console.log(cardmatch);
              
            }
            
           })
    
           
           if(check == 2){
           if (card_selected) {
           // console.log(card_selected);
            card_selected.forEach((curelem) => {
                curelem.classList.add('card-match');
                 })
           }
    
        check = 0;
    }
    else{
        
        check = 0;
        console.log(check);
    }
    if (cardmatch == 34) {
        time++;
        var win = document.getElementById('win');
        win.style.display = 'block';
    win.innerText = 'Yipee! You Won 🏆🥇';
    
    document.getElementById('timer').style.display = 'none';
    clearInterval();
    setTimeout(() => {
     location.reload();
    },8000)
    
    }else{
        cardmatch = null;
    }
    
    }
    
    const resetGame = () => {
        clickcount = 0;
        firstcard = '';
        secondcard = '';
        let card_selected = document.querySelectorAll('.card-selected');
       let card = document.querySelectorAll('.card' );
      
        card_selected.forEach((curelem) => {
       curelem.classList.remove('card-selected');
        }
        
        )
    }
    const cards = document.querySelectorAll('.card');
    parentDiv.addEventListener('click' ,(event) => {
    
        let  curcard  = event.target;console.log(curcard);
    
        let cardest = curcard.parentElement;
     //   console.log(cardest);
        if(curcard.id === 'card-section'){
            return false;
            clickcount =0;
          }else if(curcard.className === 'card'){
            return false;
            clickcount =0;
          }else{
        clickcount++;
          }
        if (clickcount< 3) {
    
    if (clickcount === 1) {
             firstcard = curcard.parentNode.dataset.name;
             curcard.parentNode.classList.add('card-selected');
    }
    else{
        secondcard = curcard.parentNode.dataset.name;
        console.log(firstcard,secondcard);
        curcard.parentNode.classList.add('card-selected');
    }
     if (firstcard != '' && secondcard != '') {
        if (firstcard === secondcard) {
            //curcard.classList.add('card-match');
            card_matches()
            setTimeout( () => {
            
                resetGame();
            },1000);
    
        }
        else{
            setTimeout( () => {
    
                resetGame();
            },1000);
        }
        
     } 
     
     
        }
      
    
       
    })
    
    settime();
    
    } )

