//Declarando variáveis
let btnContact = document.querySelector(".jl-btn-contact");
let toggleModal = document.querySelectorAll(".jl-toggle-modal");

//Page Preloader
window.addEventListener("load", function () {
  let pagePreloader = document.querySelector(".jl-preloader");
  pagePreloader.classList.add("jl-fade-out");

  setTimeout(function () {
    pagePreloader.style.display = "none";
  }, 2000);
});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener("click", function () {
  let boxContact = document.querySelector(".jl-contact-info");
  boxContact.classList.toggle("jl-is-open");
  this.classList.toggle("jl-change-icon");
});

//Abrindo e Fechando o Modal de Orcamento
for (let i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener("click", function () {
    let overlay = document.querySelector(".jl-overlay");
    let modalOrcamento = document.querySelector("#jl-modal-orcamento");

    overlay.classList.toggle("jl-is-open");
    modalOrcamento.classList.toggle("jl-is-open");
    modalOrcamento.classList.toggle("jl-slide-top-in");
  });
}

// Animando Elementos on Scroll com Waypoints
let myScrollDown = document.querySelector(".jl-scroll-down");
let waypoint = new Waypoint({
  element: myScrollDown,
  handler: function () {
    myScrollDown.classList.toggle("jl-fade-out");
  },
  offset: "80%",
});

