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
var timeSecond;
let restTime;
let restMode;



timer.addEventListener('secondsUpdated', () => {
    const obj = timer.getTimeValues();
    hour.innerText = obj.hours.toString().padStart(2, '0');
    minute.innerText = obj.minutes.toString().padStart(2, '0');
    second.innerText = obj.seconds.toString().padStart(2, '0');
})


function pauseTime(){
    timer.pause();
    start.disabled = false;
}

function resetTime(){
    timer.stop();
    restMode = false;
    start.disabled = false;
    second.innerText = "00";
    minute.innerText = "00";
    hour.innerText = "00";
}

function restWatch(){
    alert("Be sure to go outside and take a break from the screen");
    timer.stop();
    restMode = true;
    timeSecond = (secondsCNT(parseInt(hour.innerText),parseInt(minute.innerText),parseInt(second.innerText)));
    restTime = Math.floor(timeSecond/3);
    console.log(timeSecond);
    console.log(restTime);
}

function startStopwatch(){
    timer.start();
    restMode = false; 
    start.disabled = true;
}

function secondsCNT(hr,min,sec){
    return hr*3600+min*60+sec;
}

function displayTime(sec){
    hour.innerText = Math.floor(sec / 3600);
    minute.innerText = math.floor((sec % 3600) / 60);
    second.innerText = Math.floor((sec % 3600) % 60);
}

function endTime(){
    alert("timer Done");
}