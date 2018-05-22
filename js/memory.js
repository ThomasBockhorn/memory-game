//will flip when card is picked
const deck = document.querySelector(".deck");
deck.addEventListener("click", function(e){
    if(e.target.tagName.toLowerCase() === "img"){
        const side = e.target.parentElement.parentElement;
        side.classList.toggle("flip");
    }
});

//random number generator
function randomNumber(min, max){
    return Math.floor(Math.random() * (max-min +1)) + min;
}

