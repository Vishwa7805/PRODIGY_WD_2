let timer;
let startTime;
let elapsedTime = 0;
let running = false;

function start() {
    if (!running) {
        running = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 100);
    }
}

function stop() {
    if (running) {
        running = false;
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
    }
}

function reset() {
    running = false;
    clearInterval(timer);
    elapsedTime = 0;
    document.querySelector('.display').textContent = '00:00:00:00';
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    const milliseconds = Math.floor(elapsedTime % 1000 / 10);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    document.querySelector('.display').textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, '0');
}
