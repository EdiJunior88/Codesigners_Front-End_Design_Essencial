//PORTFOLIO SLIDER

//Declarando variáveis do slider
let sliderContainer = document.querySelector(".jl-slider-container");
let sliderList = document.querySelector(".jl-slider-list");
let sliderItem = document.querySelectorAll(".jl-slider-item");
let sliderListWidth = null;

//Contador de páginas no slider
const sliderTotalItems = sliderItem.length;
let currentSlide = document.querySelector(".jl-current-slide");
let totalSlide = document.querySelector(".jl-total-slide");

//Fazendo Animação do Slider onClick
let firstItem = document.querySelector(".jl-item-prev");
let nextItem = document.querySelector(".jl-item-next");
let sliderPos = 0;

//Capturando larguras individuais
let containerWidth = sliderContainer.parentElement.offsetWidth;

//Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + "px";

for (let p = 0; p < sliderItem.length; p++) {
  sliderItem[p].style.width = containerWidth + "px";
  let sliderItemWidth = sliderItem[p].offsetWidth;

  sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + "px";

//HANDLERS

//Next Slide Animação
let nextSlideAnim = function () {
  let lastItem = sliderListWidth - containerWidth;

  if (sliderPos * -1 === lastItem) {
    return;
  }

  sliderPos -= containerWidth;

  anime({
    targets: sliderList,
    translateX: sliderPos,
  });
};

//Prev Slide Animação
let prevSlideAnim = function () {
  if (sliderPos === 0) {
    return;
  }

  sliderPos += containerWidth;

  anime({
    targets: sliderList,
    translateX: sliderPos,
  });
};

//Counter Formatter
let counterFormatter = function (number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
};

//ACTIONS
totalSlide.innerHTML = counterFormatter(sliderTotalItems);

nextItem.addEventListener("click", nextSlideAnim);
firstItem.addEventListener("click", prevSlideAnim);
