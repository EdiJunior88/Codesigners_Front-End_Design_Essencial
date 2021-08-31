var myBox = document.getElementById('box');
var allBoxes = document.querySelectorAll('.box');

myBox.addEventListener('mouseover', function() {
  for(var i = 0; allBoxes.length > i; i++) {
    allBoxes[i].style.backgroundColor = 'black';
  }
});

window.addEventListener('scroll' , function() {

});