//Declarando variáveis
let btnContact = document.querySelector(".jl-btn-contact");

//Página de Loading
window.addEventListener("load", function () {
  let pagePreloader = this.document.querySelector(".jl-preloader");
  pagePreloader.classList.add("jl-fade-out");

  setTimeout(function () {
    pagePreloader.style.display = "none";
  }, 2000);
});

//Abrindo e fechando modal (contato)
btnContact.addEventListener("click", function () {
  let boxContact = document.querySelector(".jl-contact-info");
  boxContact.classList.toggle("jl-is-open");
  this.classList.toggle("jl-change-icon");
});
