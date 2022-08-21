// let array = [];
let count = 0;
const cardsBtn = document.getElementsByClassName('btn-success')
for (let btn of cardsBtn) {
    btn.addEventListener('click', function (event) {
        const targetValue = event.target;
        targetValue.disabled = true;


        const playersName = (event.target.parentNode.children[1].children[0].innerText)
        //    array.push(playersName);
        count = count + 1;
        //    if(count === 6){
        //     alert('sorry')
        //     return;
        // }
        displayText(count, playersName)
    })
};



//Display selected players name:
function displayText(num, name) {
    if (num <= 5) {
        const tableBody = document.getElementById('body-table');
        const ol = document.createElement('ol');
        ol.innerHTML = `
       <span>${num}.</span>
       <span>${name}</span>
       `;
        tableBody.appendChild(ol)
        return
    }
    const allButtons = document.querySelectorAll('.btn-success');
    for (let button of allButtons) {
        button.disabled = true;
    }

};