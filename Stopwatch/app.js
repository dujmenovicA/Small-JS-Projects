let appendSec = document.getElementById('sec');
let appendTen = document.getElementById('ten');
let appendMin = document.getElementById('min');
let min = 0;
let sec = 0;
let ten = 0;
let interval;

const stopButton = document.getElementById('stop');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', () => {

    interval = setInterval(startTimer, 10);
})

stopButton.addEventListener('click', () => {
    clearInterval(interval);
})

resetButton.addEventListener('click', () => {
    clearInterval(interval);
    ten = 0;
    sec = 0;
    min = 0;
    appendSec.innerText = '00';
    appendTen.innerText = '00';
    appendMin.innerText = '00';
})


function startTimer() {
    ten++;
    if (ten <= 9) {
        appendTen.innerHTML = '0' + ten;
    }
    if (ten > 9) {
        appendTen.innerHTML = ten;
    }
    if (ten > 99) {
        ten = 0;
        sec++;
        appendSec.innerHTML = '0' + sec;
        appendTen.innerHTML = '0' + ten;

        if (sec > 9) {
            appendSec.innerHTML = sec;
        }
        if (sec > 59) {
            sec = 0;
            min++;
            appendMin.innerHTML = '0' + min;
            appendSec.innerHTML = '0' + sec;
            if (min > 9) {
                appendMin.innerHTML = min;
            }
        }
    }
}