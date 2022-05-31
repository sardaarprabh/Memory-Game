const cardArray=[
  {
    name:'fries',
    img:'images/fries.png'
  },
  {
    name:'cheeseburger',
    img:'images/cheeseburger.png'
  },
  {
    name:'milkshake',
    img:'images/milkshake.png'
  },
  {
    name:'hotdog',
    img:'images/hotdog.png'
  },
  {
    name:'ice-cream',
    img:'images/ice-cream.png'
  },
  {
    name:'pizza',
    img:'images/pizza.png'
  },
  {
    name:'fries',
    img:'images/fries.png'
  },
  {
    name:'cheeseburger',
    img:'images/cheeseburger.png'
  },
  {
    name:'milkshake',
    img:'images/milkshake.png'
  },
  {
    name:'hotdog',
    img:'images/hotdog.png'
  },
  {
    name:'ice-cream',
    img:'images/ice-cream.png'
  },
  {
    name:'pizza',
    img:'images/pizza.png'
  }
 
]
cardArray.sort(()=>0.5-Math.random());
const gridDisplay=document.querySelector('#grid')
const resultDisplay=document.querySelector('#result');
let cardsChosen=[];
let cardChosenIds=[];
const cardsWon=[];
 function createBoard(){
   for(let i=0;i<cardArray.length;i++){
     const card=document.createElement('img');
     card.setAttribute('src','images/blank.png');
     card.setAttribute('data-id',i);

     card.addEventListener('click',flipCard);

     gridDisplay.appendChild(card);
    }
 }
 createBoard();

 const cards=document.querySelectorAll('img');


 function checkMatch(){

  const optionOneId=cardChosenIds[0];
  const optionTwoId=cardChosenIds[1];



   console.log('check match');
    if(optionOneId==optionTwoId){
      cards[optionOneId].setAttribute('src','images/blank.png');
      cards[optionTwoId].setAttribute('src','images/blank.png');
      alert('You clicked the same image');
    }

   if(cardsChosen[0]===cardsChosen[1]){
     alert('Its a match');
     cards[optionOneId].setAttribute('src','images/white.png');
     cards[optionTwoId].setAttribute('src','images/white.png');
     cards[optionOneId].removeEventListener('click',flipCard);
     cards[optionTwoId].removeEventListener('click',flipCard);
     cardsWon.push(cards[cardsChosen]);

    }else{
      
    cards[optionOneId].setAttribute('src','images/blank.png');
    cards[optionTwoId].setAttribute('src','images/blank.png');
     alert('sorry try again');
     cards[optionOneId].addEventListener('click',flipCard);
    cards[optionTwoId].addEventListener('click',flipCard);
    }
    

    resultDisplay.textContent=cardsWon.length;
    cardsChosen=[];
    cardChosenIds=[];
    if(cardsWon.length==cardArray.length/2){
      alert('Game Finish');
      resultDisplay.textContent='Won';

    }
    
 }

  
function flipCard(){
  const cardId= this.getAttribute('data-id');
  const chosenCardName=cardArray[cardId].name;
  cardsChosen.push(chosenCardName);
  cardChosenIds.push(cardId);
  cards[cardId].removeEventListener('click',flipCard);
  this.setAttribute('src',cardArray[cardId].img);
if(cardsChosen.length===2){
  setTimeout(checkMatch,500);
}  
} 