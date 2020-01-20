let seconds;
let timer;
let stopColor;
let timeElement;

const elem = (id) => document.getElementById(id);

const start = () => {
  seconds = 60;
  elem('start-screen').style.display = 'none';
  elem('counter-screen').style.display = 'block';
  timeElement = elem('time');
  timeElement.textContent = seconds;
  timer = setInterval(updateTime, 1000);
  stopColor = getComputedStyle(document.body).getPropertyValue('--stop-color');
}

const updateTime = () => {
  timeElement.textContent = --seconds;
  if (seconds === 0) {
    elem('sound').play();
    timeElement.style.color = stopColor;
  }
}

const stop = () => {
  elem('start-screen').style.display = 'block';
  elem('counter-screen').style.display = 'none';
  timeElement.removeAttribute('style');
  clearInterval(timer);
}
