
let count = 0;
const cardsBtn = document.getElementsByClassName('btn-success')
for (let btn of cardsBtn) {
    btn.addEventListener('click', function (event) {
        const targetValue = event.target;
        targetValue.disabled = true;


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
        return
    }

    //disabled all button after selecting 5 players
    const allButtons = document.querySelectorAll('.btn-success');
    alert('Sorry! you can not select more than 5 player')
    for (let button of allButtons) {
        button.disabled = true;
    }

};

    //Function all input values :
    function findingInput(elementId){
        const parPlayer = document.getElementById(elementId).value;
        return parseFloat(parPlayer);
        // console.log(parPlayer)
    }

    //Get Calculate Button and find player Expose:
    document.getElementById('calculate-btn').addEventListener('click', function(){
        const cardBody = document.getElementById('body-table')
        const cardBodyIndex = (cardBody.children.length)

        const playerExposesValue = findingInput('per-player-input')
        
        const playerExposes = (playerExposesValue * cardBodyIndex)
        setValues('player-expose', playerExposes);
    })

    //Set values function:
    function setValues(elementId, value){
        if(isNaN(value) || value <= 0){         //set condition:
            alert('Please input a valid number');
            return;
        }
       document.getElementById(elementId).innerText = value;
    };




document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const manager = findingInput('manager-field');
    const coaches = findingInput('coaches-field');

    if(manager < 0 || coaches < 0){
        alert('wrong')
        return;
    }

    const playerExposeMoney = document.getElementById('player-expose');
    const playerExposesString = parseFloat(playerExposeMoney.innerText)

    const total = (manager + coaches + playerExposesString);
    console.log(total);

    setValues('total', total)

});