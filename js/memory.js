//Global variable
let cardMemory = [];
let eventMemory = [];
let counter = 0;
const deck = document.querySelector(".deck");
const front = document.querySelectorAll(".front");
const back = document.querySelectorAll(".back");

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

//This function allows the user to pick two cards
function pickTwo(e){
    let card = e.target;
    eventMemory.push(card);
    if(counter < 2){
        flip(e);
        if(card.parentElement.nextElementSibling != null){
            cardMemory.push(card.parentElement.nextElementSibling.innerHTML);
        }
        counter++;
    }
}

//function that compares the cards
function compare(){
    if (counter === 2){
        if(cardMemory[0] === cardMemory[1]){
            console.log("Congrats");
            for(let i = 0; i < eventMemory.length; i++){
                eventMemory[i].parentElement.nextElementSibling.classList.toggle("locking-card");
            }
            cardMemory = [];
            eventMemory = [];
            counter = 0;
        }else{
            console.log("Try again!");
            for(let i = 0; i < eventMemory.length; i++){
                eventMemory[i].parentElement.parentElement.classList.toggle("flip");
            }
            counter = 0;
            cardMemory = [];
            eventMemory = []; 
        }
    }
}
    

//When a user picks two cards
deck.addEventListener("click", function(e){
    pickTwo(e);
    setTimeout(compare,2000);
});
