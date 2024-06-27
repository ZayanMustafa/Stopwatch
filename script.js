let timer;
let running = false;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
}

function incrementTime() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    updateDisplay();
}

startStopBtn.addEventListener('click', () => {
    if (!running) {
        timer = setInterval(incrementTime, 10);
        startStopBtn.textContent = 'Stop';
        startStopBtn.classList.add('running');
    } else {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
        startStopBtn.classList.remove('running');
    }
    running = !running;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    startStopBtn.textContent = 'Start';
    startStopBtn.classList.remove('running');
});