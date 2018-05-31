//Global variable
//For the memory game
let cardMemory = [];
let eventMemory = [];
let counter = 0;
const deck = document.querySelector(".deck");
const runningTotal = document.querySelector(".display-Result");
const finalTotal = document.querySelector(".finalTotal");
let turn = 0;   //how many cards were flipped
let winningCounter = 0; //holds how many successful matches were made

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
    if((e.target != deck) && (!e.target.parentElement.classList.contains("back"))){
        turn++;
        eventMemory.push(e.target);
        if((counter < 2) && (e.target.parentElement.nextElementSibling.classList.contains("back"))){
            cardMemory.push(e.target.parentElement.nextElementSibling.innerHTML);
            counter++;
            console.log(e.target.parentElement.nextElementSibling.innerHTML);
        }
    }
    else if(counter === 1){
        clearMemory();
    } 
}

//function that changes the value of the stars
function starChange(){
    //Stars evaluation
    if (turn === 30){
        document.getElementById("star").innerHTML = "<i class='fas fa-star'>"+"<i class='fas fa-star'>"+"<i class='fas fa-star'>";
    }
    else if (turn === 40){
        document.getElementById("star").innerHTML = "<i class='fas fa-star'>"+"<i class='fas fa-star'>";
    }
    else if (turn === 50){
        document.getElementById("star").innerHTML = "<i class='fas fa-star'>";
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
        //If the user gets all 8 pairs, the player is greeted with a modal that displays stats
        if(winningCounter === 8){
            stop(); //stops the timer
            modalMessage.style.display = "block";
            finalTotal.innerHTML = turn; //Display number of turns
            document.getElementById("starModal").innerHTML = document.getElementById("star").innerHTML;
            document.getElementById("timerModal").innerHTML = document.getElementById("timer").innerHTML = ++value;
        }
        clearMemory();
    }else if(cardMemory[0] != cardMemory[1] && cardMemory.length === 2) {
        for(let i = 0; i < eventMemory.length; i++){
            eventMemory[i].parentElement.parentElement.classList.toggle("flip");
        }
        clearMemory();
    }
    runningTotal.innerHTML = turn + " moves";
}

//Timer
//This puts the incremented timer value in the nav
function timer(){
    document.getElementById("timer").innerHTML = ++value;
}

//The actual timer mechanism 
let timerInterval = null;
function start(){
    stop(); //Stops the previous start()
    value = 0
    timerInterval = setInterval(timer, 1000);
}

//This stops the timer
function stop() {
    clearInterval(timerInterval);
}


//When a user picks two cards
start();
deck.addEventListener("click", function(e){
    flip(e);
    pickTwo(e);
    starChange(); //changes the star level when you reach certain turn counts
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

