// your code here:

var seconds = 0

var timerId = ''

var time = document.querySelector('#timer')

var start

// function updateTime() {
//   var time = document.querySelector('#timer')
//   time.textContent = 'Time Elapsed: ' + seconds;
//   seconds++;
// }

document.querySelector('#reset').addEventListener('click', function(){
  clearInterval(start)
  seconds = 0
  time.textContent = 'Stop Watch'
});

document.querySelector('#start').addEventListener('click', function() {
  start = window.setInterval(updateTime, 1000)
});

function updateTime() {
  time.textContent = 'Time Elapsed: ' + seconds;
  seconds++;
}

document.querySelector('#pause').addEventListener('click', function() {
  clearInterval(start)
});
