//Global variable
let cardMemory = [];
let eventMemory = [];
let counter = 0;
const deck = document.querySelector(".deck");
let winningCounter = 0;
const runningTotal = document.querySelector(".display-Result");

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
        if(card.parentElement.nextElementSibling != null){
            cardMemory.push(card.parentElement.nextElementSibling.innerHTML);
            counter++;
        }  
    }
}
function clearMemory(){
    cardMemory.length = 0;
    eventMemory.length = 0;
    counter = 0;
}

//function that compares the cards
function compare(){
    if(cardMemory[0] === cardMemory[1] && cardMemory.length === 2){
        for(let i = 0; i < eventMemory.length; i++){
            eventMemory[i].parentElement.nextElementSibling.classList.toggle("locking-card");
        }
        winningCounter++;
        runningTotal.innerHTML = "You have paired: " + winningCounter;
        clearMemory();
    }else if(cardMemory[0] != cardMemory[1] && cardMemory.length === 2) {
        for(let i = 0; i < eventMemory.length; i++){
            eventMemory[i].parentElement.parentElement.classList.toggle("flip");
        }
        clearMemory();
    }

    //This will display the winning message when you reach 8 pairs
    if(winningCounter === 8){
        runningTotal.innerHTML = "YOU WON!!!"; 
    }
}
    
//When a user picks two cards
deck.addEventListener("click", function(e){
    flip(e);
    pickTwo(e);
    setTimeout(compare,3000);  
});
