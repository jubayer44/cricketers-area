//Finding Players Name:
let count = 0;
const cardsBtn = document.getElementsByClassName('btn-success')
for (let btn of cardsBtn) {
    btn.addEventListener('click', function (event) {
        const targetValue = event.target;   //Get targeted btn
        targetValue.disabled = true;    //disabled btn after click

        const playersName = (event.target.parentNode.children[1].children[0].innerText)
        count = count + 1;

        displayText(count, playersName)
    })
};

//Display selected players name:
function displayText(num, name) {
    if (num < 6) {
        const tableBody = document.getElementById('body-table');
        const ol = document.createElement('ol');
        ol.innerHTML = `
       <span>${num}.</span>
       <span>${name}</span>
       `;
        tableBody.appendChild(ol)
        return;
    };

    //disabled all button after selecting 5 players:
    const allButtons = document.querySelectorAll('.btn-success');
    alert('Sorry! you can not select more than 5 player')
    for (let button of allButtons) {
        button.disabled = true;
    }
};

//Get Calculate Button and find player Exposes Amount:
document.getElementById('calculate-btn').addEventListener('click', function () {
    const cardBody = document.getElementById('body-table')
    const cardBodyIndex = (cardBody.children.length)

    //Call common function for get input value from per player:
    const playerExposesValue = findingInput('per-player-input')
    const playerExposes = (playerExposesValue * cardBodyIndex)

    //Call common function for set value in players exposes:
    setValues('player-expose', playerExposes);
});

//Get Total Button and find Total Amount:
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    //Call common function for get input value from Manager and Coaches:
    const manager = findingInput('manager-field');
    const coaches = findingInput('coaches-field');

    //Input validation:
    if (manager < 0 || coaches < 0) {
        alert('Please input a valid number')
        return;
    };

    //Get player exposes amount:
    const playerExposeMoney = document.getElementById('player-expose');
    const playerExposesString = parseFloat(playerExposeMoney.innerText)

    //Sum total amount:
    const total = (manager + coaches + playerExposesString);
    console.log(total);

    //Call common function for set value in Total: 
    setValues('total', total)

});