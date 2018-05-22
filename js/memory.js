//will flip when card is picked
const deck = document.querySelector(".deck");
deck.addEventListener("click", function(e){
    if(e.target.tagName.toLowerCase() === "img"){
        const side = e.target.parentElement.parentElement;
        side.classList.toggle("flip");
    }
});

//random number generator
function randomNumber(){
    let num = Math.floor(Math.random() * 16 + 1);
    return num;
}
