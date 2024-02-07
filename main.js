let timeHolder = document.getElementById('timeHolder');
let millisecondInput = document.getElementById('millisecond');
let [millisecond, seconds, minutes, hours] = [0, 0, 0, 0];
let timer = 0;

function stopWatch() {
  millisecond += 10;
  if (millisecond == 1000) {
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
    ms = '000' + millisecond;
  } else if (millisecond < 100) {
    ms = '00' + millisecond;
  } else if (millisecond < 1000) {
    ms = '0' + millisecond;
  } else {
    ms = millisecond;
  }

  // timeHolder.innerHTML = `0${hours}:0${minutes}:0${seconds}`;
  let ot = (millisecondInput.innerHTML = ms);
  timeHolder.innerHTML = h + ':' + m + ':' + s;
  millisecondInput.innerHTML = ot;
}

function watchStarter() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 10);
}

function watchStoper() {
  clearInterval(timer);
}

function watchReseter() {
  clearInterval(timer);
  [millisecond, seconds, minutes, hours] = [0, 0, 0, 0];
  timeHolder.innerHTML = '00:00:00';
  millisecondInput.innerHTML = '000';
}
