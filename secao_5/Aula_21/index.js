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
  myList.push('<li>' + usuario[info] + '</li>')
} */

//While

while( frutas.length > 0) {
  console.log('Tem frutas');
}

//Map

lista.insertAdjacentHTML('beforeend', myList.join(''));