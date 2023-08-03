const centerX = 250;
const centerY = 400;
const radius = 200;
const startAngle = 3.14159265;


const duration = 15*60*1000;

var updateTimer;
var startTime;
var canvas;
var timer;
var done = false;

function init() {

    canvas = document.getElementById("canvas");
    timer = document.getElementById("timer");
}

function start() {

    startTime = Date.now();
    updateTimer = setInterval(update, 100);
}

function stop() {
    clearInterval(updateTimer);
}

function update() {

    var now = new Date();
    var diff = now - startTime;
    var restDuration = duration - diff;
    var progress = 1 - (restDuration/duration);

    if (progress > 1){
        progress = 1;
        done = true;
    }

    timer.innerHTML = format(restDuration);

    updatePiChart(canvas, progress);
}

function format(milliseconds){

    let seconds = Math.floor(milliseconds/ 1000);
    milliseconds = milliseconds % 1000;
    let minutes = Math.floor(seconds/ 60);
    seconds = seconds % 60;
    let hrs = Math.floor(minutes/ 60);
    minutes = minutes % 60;
    return hrs + " : " + minutes + " : " + seconds + " - <small>"+ milliseconds + "</small>";
}

function updatePiChart(canvas, progress) {

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + progress * 3.14);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.stroke();
}