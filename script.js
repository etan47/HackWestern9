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
let restTime = 0;
let restMode = false;



timer.addEventListener('secondsUpdated', () => {
    if(restMode === false){
        const obj = timer.getTimeValues();
        hour.innerText = obj.hours.toString().padStart(2, '0');
        minute.innerText = obj.minutes.toString().padStart(2, '0');
        second.innerText = obj.seconds.toString().padStart(2, '0');
    }
    else{
        const obj = timer.getTimeValues();
        var seconds = obj.hours*3600 + obj.minutes*60 + obj.seconds;
        if (restTime - seconds <= 0){
            alert("Rest Ended");
            restMode = false;
            timer.reset();
            timer.stop();
            rest.disabled = false;
            start.disabled = false;
            hour.innerText = "00";
            minute.innerText = "00";
            second.innerText = "00";
        }
        else{
            displayTime(restTime - seconds);
        }
    }
})


function pauseTime(){
    timer.pause();
    start.disabled = false;
}

function resetTime(){
    timer.stop();
    restMode = false;
    start.disabled = false;
    rest.disabled = false;
    second.innerText = "00";
    minute.innerText = "00";
    hour.innerText = "00";
}

function restWatch(){
    alert("Be sure to go outside and take a break from the screen");
    timer.stop();
    timer.reset();
    start.disabled = true;
    rest.disabled = true;
    restMode = true;
    timeSecond = (secondsCNT(parseInt(hour.innerText),parseInt(minute.innerText),parseInt(second.innerText)));
    restTime = Math.floor(timeSecond/3);
}

function startStopwatch(){
    timer.start();
    start.disabled = true;
}

function secondsCNT(hr,min,sec){
    return hr*3600+min*60+sec;
}

function displayTime(sec){
    hour.innerText = Math.floor(sec / 3600).toString().padStart(2,0);
    minute.innerText = Math.floor((sec % 3600) / 60).toString().padStart(2,0);
    second.innerText = Math.floor((sec % 3600) % 60).toString().padStart(2,0);
}

function endTime(){
    alert("timer Done");
}