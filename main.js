var button = document.querySelector('.yoo')
var background = document.querySelector('.main');
button.addEventListener('click', function(){
  var random = (Math.random() * 255)
var floor = Math.round(random)

var two = (Math.random() * 255)
var twot = Math.round(two)

var three = (Math.random() * 255)
var threet = Math.round(three)
  background.style.backgroundColor = 'rgb(' + floor + ', ' + twot + ', ' + threet + ')'
  button.innerHTML = 'Weldone, Keep clicking'
})
