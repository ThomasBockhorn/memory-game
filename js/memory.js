//Global variable
const arr = [];

//When the page is loaded the cards get shuffled
onload = shuffle();

//flip() flips the cards
function flip(e){
     if(e.target.tagName.toLowerCase() === "img"){
        const side = e.target.parentElement.parentElement;
        side.classList.toggle("flip");
    }
    return e.target;
}

//This function will shuffle the cards
function shuffle(){
    const deck = document.querySelector(".deck");
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

//When the user clicks a card
const deck = document.querySelector(".deck");
deck.addEventListener("click",function(e){
    //put value in array then compare
    const cardOne = flip(e);
});
//Hold on to the choice the user picked
//const cardChoice = e.target;
//arr.push(cardChoice.parentElement.nextElementSibling.innerHTML);
//const deck = document.querySelector(".deck");
//   deck.addEventListener("click", function(e){