//When the page is loaded the cards get shuffled
onload = shuffle();

//Card functionality
//this function pick will flip when card is picked
function pick(){
    const deck = document.querySelector(".deck");
    deck.addEventListener("click", function(e){
        if(e.target.tagName.toLowerCase() === "img"){
            const side = e.target.parentElement.parentElement;
            side.classList.toggle("flip");
        }
    });
}
pick();

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
//When the user clicks on shuffle on the menu
const choice = document.getElementById("reshuffle");
choice.addEventListener("click",function(){
    shuffle();
});

