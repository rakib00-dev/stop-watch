let timeHolder = document.getElementById('timeHolder');
let [seconds, minutes, hours] = [0, 0, 0];
let timer = 0;

function stopWatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;

  // timeHolder.innerHTML = `0${hours}:0${minutes}:0${seconds}`;
  timeHolder.innerHTML = h + ':' + m + ':' + s;
}

function watchStarter() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}
