//Global variables
const time_ele = document.querySelector('.watch .time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');


let counter = 0;
let interval = null;
//Event Listeners
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

//functions of timer ,start ,stop and reset

function timer(){
    counter++;
    let hours = Math.floor( counter / 3600);
    let mins = Math.floor( (counter - (hours * 3600) )/ 60);
    let seconds = counter % 60;

    if(seconds < 10) seconds = '0' + seconds;
    if(mins < 10) mins = '0' + mins;
    if(hours < 10) hours = '0' + hours;
   
   
    time_ele.innerText = `${hours}:${mins}:${seconds}` ;
  

}
function start (){
    if(interval){
        return;
    }
    interval = setInterval(timer, 1000);
}

function stop(){
    clearInterval(interval);
    interval=null;
}
function reset(){
    stop();
    counter = 0;
    time_ele.innerText= '00:00:00';
}