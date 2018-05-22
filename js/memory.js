//will flip when card is picked
const deck = document.querySelector(".deck");
deck.addEventListener("click", function(e){
    if(e.target.tagName.toLowerCase() === "img"){
        const side = e.target.parentElement.parentElement;
        side.classList.toggle("flip");
    }
});

//This function will shuffle the cards
function shuffle(){
    const deck = document.querySelector(".deck");
    const frag = document.createDocumentFragment();

    while(deck.children.length){
        frag.appendChild(deck.children[Math.floor(Math.random()*deck.children.length)]);
    }
    deck.appendChild(frag);
}

