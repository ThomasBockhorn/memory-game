//will flip when card is picked
const deck = document.querySelector(".deck");
deck.addEventListener("click", function(e){
    const side = e.target.parentElement;
    side.classList.toggle("flip");
})
