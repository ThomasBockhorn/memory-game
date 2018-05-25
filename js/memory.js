//Global variable
let cardMemory = [];
let counter = 0;
const deck = document.querySelector(".deck");

//When the page is loaded the cards get shuffled
onload = shuffle();

//flip() flips the cards
function flip(e){
     if(e.target.tagName.toLowerCase() === "img"){
        const side = e.target.parentElement.parentElement;
        side.classList.toggle("flip");
    }
}

//This function will shuffle the cards
function shuffle(){
    const frag = document.createDocumentFragment();

    while(deck.children.length){
        frag.appendChild(deck.children[Math.floor(Math.random()*deck.children.length)]);
    }
    deck.appendChild(frag);
}

//Menu functionality
//When a user clicks on new
const newChoice = document.getElementById("new");
newChoice.addEventListener("click", function(){
    document.location.reload(true);
});

//Limits the cards to two
function pickTwo(e){
    let card = e.target;
    if(counter < 2){
        flip(e);
        cardMemory.push(card.parentElement.nextElementSibling.innerHTML);
        counter++;
    }
    if(counter === 2){
        if(cardMemory[0] === cardMemory[1]){
            console.log("Congrats");
            cardMemory = [];
            counter = 0;
        }else{
            console.log("Try again!");
            counter = 0;
            cardMemory = []; 
        }
    }
}

//When a user picks two cards
deck.addEventListener("click", function(e){
    pickTwo(e);
});
