var myBox = document.getElementById('box')

function myInfo(x, y, z) {

  var myCalc = x + y + z;

  myBox.append(myCalc);
}

myInfo('Brunão', ' Codesigners', ' Front End');