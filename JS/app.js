let array = [];
let count = 0;
const cardsBtn = document.getElementsByClassName('btn-success')
for(let btn of cardsBtn){
    btn.addEventListener('click', function(event){
       const playersName = (event.target.parentNode.children[1].children[0].innerText)
       array.push(playersName);
       count = count + 1;
    //    console.log(count);
       const tableBody = document.getElementById('body-table');
       const ol = document.createElement('ol');
       ol.innerHTML = `
       <span>${count}.</span>
       <span>${playersName}</span>
       `;
       tableBody.appendChild(ol)
       
})
};