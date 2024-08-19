
let [seconds, minutes, hours] = [0, 0, 0];
let interval = null;
const timer = document.getElementById('timer');

function stopWatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds;

    timer.innerHTML = `${h}H:${min}M:${sec}S`
}

function startWatch() {
    if (interval != null) {
        clearInterval(interval);
    }
    interval = setInterval(function () {
        stopWatch();

    }, 1000)
}

function stopWatchFunction() {
    clearInterval(interval);
};

function resetWatch(){
    clearInterval(interval);
    [seconds, minutes, hours] = [0, 0, 0];
    timer.innerHTML = "00:00:00";
}