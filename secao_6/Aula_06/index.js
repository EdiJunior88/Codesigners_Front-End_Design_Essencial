$(function () {
  var azuis = $(".item-azul");
  var vermelhos = $(".item-vermelho");
  var btnAzuis = $("#faca-azul");
  var btnVermelhos = $("#faca-vermelho");
  var btnChange = $(".btn-change");
  var btnRemove = $(".btn-remove");
  var btnToggle = $(".btn-toggle");
  var items = $("h1");

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

  btnChange.click(function () {
    items.addClass("change-items");
  });

  btnRemove.click(function () {
    items.removeClass("change-items");
  });

  btnToggle.click(function () {
    items.toggleClass("change-items");
  });
});
