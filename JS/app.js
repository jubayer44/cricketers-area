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