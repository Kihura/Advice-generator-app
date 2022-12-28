window.onload = function() {

const id=document.querySelector('#id');
const advice= document.querySelector('#advice');
fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        advice.innerHTML=data.slip.advice;
        id.innerHTML=data.slip.id;
    
    });



    const select1 = document.querySelector('#select');
    select1.addEventListener('click', ()=>{
        fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        advice.innerHTML=data.slip.advice;
        id.innerHTML=data.slip.id;
    } )}
    )

}


