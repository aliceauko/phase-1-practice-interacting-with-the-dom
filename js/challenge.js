const counter = document.getElementById('counter');
const minus =document.getElementById('minus');
const plus=document.getElementById('plus');
const heart =document.getElementById('heart');
const pause =document.getElementById('pause');



//automatic increment
let interval = setInterval (rise, 300);
console.log(interval)

let i=0;
function rise(){
    counter.innerText = i;
    if (i<300){
        i++;
    }
}


//manually decrement
minus.addEventListener('click', function(){
        counter.innerText --
})


//manually decrement
plus.addEventListener('click', function(){
     counter.innerText++
})



//pause
pause.addEventListener('click', function(){
    clearInterval(interval)
})



