meusGatos = {
  gato: [
    {
      "id": 1,
      "nome": "Chico",
      "descricao": "O Chico cansou de ser Gato e virou Dinossauro.",
      "fotoURL": "img/gato-01.jpg",
      "linkExterno": "https://www.instagram.com/canseidesergato/"
    },

    {
      "id": 2,
      "nome": "Hamilton",
      "descricao": "Hamilton é o gato mais hipster que você vai ver hoje.",
      "fotoURL": "img/gato-02.jpg",
      "linkExterno": "https://www.instagram.com/hamilton_the_hipster_cat/"
    },

    {
      "id": 3,
      "nome": "Nala",
      "descricao": "Nala é uma gatinha muito simpática e extrovertida.",
      "fotoURL": "img/gato-03.jpg",
      "linkExterno": "https://www.instagram.com/nala_cat/"
    },
  ]
}

var cardGato = document.getElementById('card');
var btn = document.getElementById('btn');

//Fazemos um loop para checar se existe um gato com este nome
function getGato() {
  //Pegamos o valor de Input Field
  var inputGato = document.getElementById('myInput').value.toLowerCase();

  for(var i = 0; meusGatos.gato.length > i; i++) {

    var cat = meusGatos.gato[i]

    if(inputGato == cat.nome.toLowerCase()) {
      cardGato.querySelector('h1').innerHTML = cat.nome;
      cardGato.querySelector('p').innerHTML = cat.descricao;
      cardGato.querySelector('img').setAttribute('src', cat.fotoURL);
      cardGato.querySelector('.external-link').setAttribute('href', cat.linkExterno);
      return;
    }
    else {
      cardGato.querySelector('h1').innerHTML = 'Não encontramos gatinho algum. =[';
    }
  }
}

//Rodamos a Função getGato ao clicar no botão
btn.addEventListener('click', getGato);