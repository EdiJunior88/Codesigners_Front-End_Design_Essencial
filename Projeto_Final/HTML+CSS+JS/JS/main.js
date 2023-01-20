let btnContact = document.querySelector(".jl-btn-contact");

btnContact.addEventListener("click", function () {
  let boxContact = document.querySelector(".jl-contact-info");
  boxContact.classList.toggle("jl-is-open");
  this.classList.toggle("jl-change-icon");
});
