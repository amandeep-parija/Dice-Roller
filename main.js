const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollListEl = document.getElementById("roll-list");


let historyList = [];



function rollDice(){
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory(){
    rollListEl.innerHTML = '';
    for(let i = 0; i< historyList.length; i++){
        const listItem = document.createElement("li")
        listItem.innerHTML = `Roll ${i+ 1}: <span> ${getDiceFace(historyList[i])} </span>`;
        rollListEl.appendChild(listItem)
    }
}

function getDiceFace(rollResult){
    switch(rollResult){
        case 1:
            return ' <i class="fa-solid fa-dice-one"></i> ';
        case 2:
            return '<i class="fa-solid fa-dice-two"></i>';
        case 3:
            return '<i class="fa-solid fa-dice-three"></i>';
        case 4:
            return '<i class="fa-solid fa-dice-four"></i>';
        case 5:
            return '<i class="fa-solid fa-dice-five"></i>';
        case 6:
            return '<i class="fa-solid fa-dice-six"></i>';
        default:
            return '';
    }
}

buttonEl.addEventListener('click', () =>{
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice();
    }, 1000);
})