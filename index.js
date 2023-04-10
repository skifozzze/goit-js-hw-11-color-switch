const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtnEl: document.querySelector('button[data-action="start"]'),
  stopBtnEl: document.querySelector('button[data-action="stop"]'),
  bodyEl: document.querySelector('body'),
};

refs.startBtnEl.addEventListener('click', onStartBtnClick);
refs.stopBtnEl.addEventListener('click', onStopBtnClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var intervalId = null;

function onStartBtnClick() {
  intervalId = setInterval(() => {
    const randomNum = randomIntegerFromInterval(0, colors.length - 1);
    refs.bodyEl.style.backgroundColor = colors[randomNum];
  }, 1000);
  refs.startBtnEl.disabled = true;
}

function onStopBtnClick() {
  clearInterval(intervalId);
  refs.startBtnEl.disabled = false;
}
