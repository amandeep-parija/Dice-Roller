const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice")

buttonEl.addEventListener('click', () =>{
    diceEl.classList.remove("roll-animation");

    void diceEl.offsetWidth;
    
    diceEl.classList.add("roll-animation");
})