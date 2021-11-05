var listaFrutas = document.getElementById('lista');

var frutas = ["Laranja", "Kiwi", "Morango", "Abacaxi", "Melancia"];

var usuario = {
  "nome": "Brunão", 
  "profissão": "Designer", 
  "idade": 31
};

var myList = [];

//For
/* for (var i = 0; frutas.length > i; i++) {
  console.log(frutas[i])
  myList.push('<li>' + frutas[i] + '</li>');
} */

//For In
/* var info;

for(info in usuario) {
  console.log(usuario[info]);
  myList.push('<li>' + usuario[info] + '</li>');
} */

//While
/* var n = 0;

while(frutas.length > n) {
  n++;
  myList.push('<li>' + 'Tem Fruta' + n + '</li>');
} */

//Map

Object.entries(usuario).map(function(user){

  var userDate = user.join(': ')

  myList.push('<li>' + userDate + '</li>');
});

lista.insertAdjacentHTML('beforeend', myList.join(''));