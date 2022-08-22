
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
    const allButtons = document.querySelectorAll('.btn-success');
    alert('Sorry! you can not select more than 5 player')
    for (let button of allButtons) {
        button.disabled = true;
    }

};