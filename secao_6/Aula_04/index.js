meusGatos = {
  gato: [
    {
      id: 1,
      nome: "Chico",
      descricao: "O Chico cansou de ser Gato e virou Dinossauro.",
      fotoURL: "img/gato-01.jpg",
      linkExterno: "https://www.instagram.com/canseidesergato/",
    },

    {
      id: 2,
      nome: "Hamilton",
      descricao: "Hamilton é o gato mais hipster que você vai ver hoje.",
      fotoURL: "img/gato-02.jpg",
      linkExterno: "https://www.instagram.com/hamilton_the_hipster_cat/",
    },

    {
      id: 3,
      nome: "Nala",
      descricao: "Nala é uma gatinha muito simpática e extrovertida.",
      fotoURL: "img/gato-03.jpg",
      linkExterno: "https://www.instagram.com/nala_cat/",
    },
  ],
};

//Fazemos um loop para checar se existe um gato com este nome

//Pegamos o valor do Input Field

//Rodamos a Função getGato ao clicar no botão

$(function () {
  var cardGatoJquery = $("#card");
  var btnJquery = $("#btn");

  function getGato() {
    var inputGato = $("#myInput").val().toLowerCase();
  }

  getGato();
});
