const formElement = document.getElementById('form');
const timeInput = document.getElementById('time-input');
const timerTextElement = document.getElementById('timer-text-element')

const blipSfx = new Audio('blip.wav')
const coinSfx = new Audio('Pickup.wav')

let timeLeft;
let timerId;

formElement.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    startTimer();
}
function hideUi() {
    formElement.style.display = 'none';
    timerTextElement.style.display = '';
}

function showUi() {
    formElement.style.display = '';
    timerTextElement.style.display = 'none';
}

function startTimer() {
    hideUi();

    timeLeft = parseInt(timeInput.value);
    timerTextElement.innerHTML = timeLeft;


    timerId = setInterval(timerTick, 1000);
    timerTick();
}

function stopTimer() {
    clearInterval(timerId);
    setTimeout(showUi, 100);
}

function timerTick() {
    timerTextElement.innerHTML = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
        blipSfx.play();
        stopTimer();
    } else {
        coinSfx.play();
    }
}