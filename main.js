let timeHolder = document.getElementById('timeHolder');
let millisecondInput = document.getElementById('millisecond');
let [seconds, minutes, hours, millisecond] = [0, 0, 0, 0];
let timer = 0;

function stopWatch() {
  millisecond++;
  if (millisecond == 1) {
    millisecond = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  // let h = hours < 10 ? '0' + hours : hours;
  let h;
  if (hours < 10) {
    h = '0' + hours;
  } else {
    h = hours;
  }

  // let m = minutes < 10 ? '0' + minutes : minutes;
  let m;
  if (minutes < 10) {
    m = '0' + minutes;
  } else {
    m = minutes;
  }

  // let s = seconds < 10 ? '0' + seconds : seconds;
  let s;
  if (seconds < 10) {
    s = '0' + seconds;
  } else {
    s = seconds;
  }

  // let s = seconds < 10 ? '0' + seconds : seconds;
  let ms;
  if (millisecond < 10) {
    ms = '0' + millisecond;
  } else {
    ms = millisecond;
  }

  // timeHolder.innerHTML = `0${hours}:0${minutes}:0${seconds}`;
  timeHolder.innerHTML = h + ':' + m + ':' + s;
  millisecondInput.innerHTML = ms;
}

function watchStarter() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function watchStoper() {
  clearInterval(timer);
}

function watchReseter() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  timeHolder.innerHTML = '00:00:00';
}
