let second = document.querySelector("#second");
let minute = document.querySelector("#minute");
let hour = document.querySelector("#hour");

let start = document.querySelector("#start");
let reset = document.querySelector("#reset");
let pause = document.querySelector("#pause");
let rest = doucment.querySelector("#rest");

start.addEventListener('click', startStopwatch);
pause.addEventListener('click', pauseTime);
rest.addEventListener('click',restWatch);
reset.addEventListener('click', resetTime);

var { Timer } = require('lib/easytimer/dist/easytimer.min.js');
var timer = new easytimer.Timer();

timer.addEventListener('secondUpdate', () => {
    const obj = timer.getTimeValues();
    hour.innerText = obj.hour.toString().padStart(2, '0');
    minute.innerText = obj.minute.toString().padStart(2, '0');
    second.innerText = obj.second.toString().padStart(2, '0');
})

function pauseTime(){

}

function resetTime(){

}

function restWatch(){

}

function startStopwatch(){
    timer.start({precision: 'secondTenths'});
    
}
