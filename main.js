let seconds;
let timer;
let stopColor;
let timeElement;

const byId = (sel) => document.getElementById(sel);

const start = () => {
  seconds = 60;
  byId('start-screen').style.display = 'none';
  byId('counter-screen').style.display = 'block';
  timeElement = byId('time');
  timeElement.textContent = seconds;
  timer = setInterval(updateTime, 1000);
  stopColor = getComputedStyle(document.body).getPropertyValue('--stop-color');
}

const updateTime = () => {
  timeElement.textContent = --seconds;
  if (seconds === 0) {
    byId('sound').play();
    timeElement.style.color = stopColor;
  }
}

const stop = () => {
  byId('start-screen').style.display = 'block';
  byId('counter-screen').style.display = 'none';
  timeElement.removeAttribute('style');
  clearInterval(timer);
}
