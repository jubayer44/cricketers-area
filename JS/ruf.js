


function selectedPlayers(elementId){
    const tableBody = document.getElementById(elementId);
    const ol = document.createElement('ol');
    ol.innerHTML = `
    <li>${cardsBtn}</li>
    `;
    tableBody.appendChild(ol)
    console.log(ol);
}
selectedPlayers('card-body')



let count = [];
const cardsBtn = document.getElementsByClassName('btn-success')
for(let btn of cardsBtn){
    btn.addEventListener('click', function(event){
       const playersName = (event.target.parentNode.children[1].children[0].innerText)
       count.push(playersName);
       const count = count.length;
       return playersName;
    //    console.log(playersName);
    })
};