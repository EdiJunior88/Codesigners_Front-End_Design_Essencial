$(function () {
  var azuis = $(".item-azul");
  var vermelhos = $(".item-vermelho");
  var btnAzuis = $("#faca-azul");
  var btnVermelhos = $("#faca-vermelho");

  btnAzuis.click(function () {
    azuis.css("color", "blue");
    $("body").css("background-color", "blue");
  });

  btnVermelhos.click(function () {
    vermelhos.css({
      color: "red",
      backgroundColor: "black",
    });
    $("body").css("background-color", "red");
  });
});
