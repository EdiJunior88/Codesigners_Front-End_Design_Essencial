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

$(function () {
  var cardGatoJquery = $("#card");
  var btnJquery = $("#btn");

  function getGato() {
    //Pegamos o valor ddo Input Field
    var inputGato = $("#myInput").val().toLowerCase();

    for (var i = 0; meusGatos.gato.length > i; i++) {
      var cat = meusGatos.gato[i];

      if (inputGato == cat.nome.toLowerCase()) {
        $("#card h1").html(cat.nome);
        $("#card p").html(cat.descricao);
        $("#card img").attr("src", cat.fotoURL);
        $(".external-link").attr("href", cat.linkExterno);
        return;
      } else {
        $("#card h1").html("Não encontramos gatinho algum =[");
      }
    }
  }

  btnJquery.click(getGato);
});
