let timeHolder = document.getElementById('timeHolder');
const btns = document.getElementById('buttons');
const h1 = document.getElementById('h1');
let [seconds, minutes, hours] = [0, 0, 0];

function stopWatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
}
