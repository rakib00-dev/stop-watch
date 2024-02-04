let start = document.querySelector('#start');

start.addEventListener('click', function () {
  let i = 0;

  setInterval(function timer() {
    console.log(++i);
  }, 1000);

  this.removeEventListener('click', timer());
});
