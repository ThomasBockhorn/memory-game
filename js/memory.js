//Global variable
//For the memory game
let cardMemory = [];
let eventMemory = [];
let counter = 0;
const deck = document.querySelector(".deck");
const runningTotal = document.querySelector(".display-Result");
let turn = 0;

//for the modal
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const modalMessage = document.querySelector(".modal");
const spanModal = document.querySelector(".close");
const content = document.querySelector(".content");

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

//This will clear the memory
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
        if(winningCounter === 8){
            modalMessage.style.display = "block";
        }
        clearMemory();
    }else if(cardMemory[0] != cardMemory[1] && cardMemory.length === 2) {
        for(let i = 0; i < eventMemory.length; i++){
            eventMemory[i].parentElement.parentElement.classList.toggle("flip");
        }
        clearMemory();
    }
    turn++;
    runningTotal.innerHTML = turn + " moves";
}
    
//When a user picks two cards
deck.addEventListener("click", function(e){
    flip(e);
    pickTwo(e);
    setTimeout(compare,600);
});

//Modal setup
//When user clicks on the close button
spanModal.addEventListener("click", function(){
    modalMessage.style.display = "none";
});

//When user clicks on yes
yes.addEventListener("click", function(){
    document.location.reload(true); 
});

//When user clicks no
no.addEventListener("click", function(){
    content.innerHTML = "Thanks for playing!  GOOD BYE!!";
}); 