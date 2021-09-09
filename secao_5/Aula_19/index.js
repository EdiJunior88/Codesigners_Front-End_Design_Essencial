meusGatos = {
  gato: [
    {
      "id": 1,
      "nome": "Chico",
      "descrição": "O Chico cansou de ser Gato e virou Dinossauro.",
      "fotoURL": "img/gato-01.jpg",
      "linkExterno": "https://www.instagram.com/canseidesergato/"
    },

    {
      "id": 2,
      "nome": "Hamilton",
      "descricao": "Hamilton é o gato mais hipster que você vai ver hoje.",
      "fotoURL": "images/gato-02.jpg",
      "linkExterno": "https://www.instagram.com/hamilton_the_hipster_cat/"
    },

    {
      "id": 3,
      "nome": "Nala",
      "descricao": "Nala é uma gatinha muito simpática e extrovertida.",
      "fotoURL": "images/gato-03.jpg",
      "linkExterno": "https://www.instagram.com/nala_cat/"
    },
  ]
}

var cardGato = document.getElementById('card');
var btn = document.getElementById('btn');

//Fazemos um loop para checar se existe um gato com este nome
function getGato() {
  //Pegamos o valor de Input Field
  var inputGato = document.getElementById('myInput').value;

  for(var i = 0; meusGatos.gato.length > i; i++) {
    if(inputGato == meusGatos.gato[i].nome) {
      console.log('Gato encontrado');
      return;
    }
    else {
      console.log('Não encontramos o gato');
    }
  }
}

//Rodamos a Função getGato ao clicar no botão
btn.addEventListener('click', getGato);