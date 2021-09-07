var listaFrutas = document.getElementById('frutas');

var frutas = ["Laranja", "Kiwi", "Morango"];

var mnyList = [];

console.log(mnyList);

for(var i = 0; frutas.length > i; i++){
  mnyList.push("<li>" + frutas[i] + "</li>")
}

listaFrutas.insertAdjacentHTML('beforeend', mnyList.join(''));