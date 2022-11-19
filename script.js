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


timer.addEventListener('secondUpdate', () => {
    const obj = timer.getTimeValues();
    hour.innerText = obj.hour.toString().padStart(2, '0');
    minute.innerText = obj.minute.toString().padStart(2, '0');
    second.innerText = obj.second.toString().padStart(2, '0');
})


function pauseTime(){
    second.innerText = "99";
}

function resetTime(){
    second.innerText = "00";
    minute.innerText = "00";
    hour.innerText = "00";
}

function restWatch(){
    second.innerText = "00";

}

function startStopwatch(){
    
}
