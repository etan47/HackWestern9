let digits = document.getElementsByTagName("h1");
let buttons = document.getElementsByTagName("button");
buttons[0].addEventListener('click', startStopwatch);
let test = digits[0];
function startStopwatch(a){
    test.innerText = "01";
}