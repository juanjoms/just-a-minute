let seconds = 60;
let timer;

const byId = (sel) => document.getElementById(sel);

const start = () => {
  byId('start-screen').style.display = 'none';
  byId('counter-screen').style.display = 'block';
  byId('time').textContent = seconds;
  timer = setInterval(updateTime, 1000);
}

const stop = () => {
  clearInterval(timer);
  byId('start-screen').style.display = 'block';
  byId('counter-screen').style.display = 'none';
}

const updateTime = () => {
  byId('time').textContent = --seconds;
  console.log(seconds);
}
