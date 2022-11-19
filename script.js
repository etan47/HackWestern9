let second = document.getElementById("seconds");
let minute = document.getElementById("minutes");
let hour = document.getElementById("hours");

let start = document.getElementById("start");
let reset = document.getElementById("reset");
let pause = document.getElementById("pause");
let rest = document.getElementById("rest");

start.addEventListener('click', startStopwatch);
pause.addEventListener('click', pauseTime);
rest.addEventListener('click',restWatch);
reset.addEventListener('click', resetTime);

var timer = new easytimer.Timer();

timer.addEventListener('secondUpdate', () => {
    const obj = timer.getTimeValues();
    hour.innerText = obj.hour.toString().padStart(2, '0');
    minute.innerText = obj.minute.toString().padStart(2, '0');
    second.innerText = obj.second.toString().padStart(2, '0');
})


function pauseTime(){
    timer.pause();
}

function resetTime(){
    timer.stop();
    second.innerText = "00";
    minute.innerText = "00";
    hour.innerText = "00";
}

function restWatch(){
    second.innerText = "00";

}

function startStopwatch(){
    timer.start();
}
