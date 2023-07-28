const duration = 15*60*1000;
var startTime;
var ctx;
var timer;
const centerX = 250;
const centerY = 400;
const radius = 200;
const startAngle = 3.14159265;

function init() {

    const canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    timer = document.getElementById("timer");
}

function start() {
    startTime = Date.now();
    setInterval(update, 100);
}

function update() {

    var now = new Date();
    var diff = now - startTime;
    var restDuration = duration - diff;
    var progress = 1 - (restDuration/duration);

    console.log(progress);

    timer.innerHTML = format(restDuration);

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + progress * 3.14);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.stroke();
}

function format(milliseconds){

    var seconds = Math.floor(milliseconds/ 1000);
    milliseconds = milliseconds % 1000;
    var minutes = Math.floor(seconds/ 60);
    seconds = seconds % 60;
    var hrs = Math.floor(minutes/ 60);
    minutes = minutes % 60;
    return hrs + " : " + minutes + " : " + seconds + " - <small>"+ milliseconds + "</small>";
}