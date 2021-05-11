const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  bodyColor: document.querySelector('body'),
  start: document.querySelector('.start-btn'),
  stop: document.querySelector('.stop-btn'),
};

refs.start.addEventListener('click', startColor);
refs.stop.addEventListener('click', stopColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBackgroundColor(color) {
  refs.bodyColor.style.background = color;
}

function startColor() {
    
}

function stopColor() {}
