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
let currentCounter = 1;

//Linhas do NAV
let navItems = document.querySelectorAll(".jl-item-navigator a");

//Número Interativo do NAV
let navCounter = document.querySelector(".jl-navigator-counter span");

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
    easing: "cubicBezier(0,1.01,.32,1)",
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
    easing: "cubicBezier(0,1.01,.32,1)",
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

//Counter Add
let counterAdd = function () {
  if (currentCounter >= 0 && currentCounter < sliderTotalItems) {
    currentCounter++;
    currentSlide.innerHTML = counterFormatter(currentCounter);
    navCounter.innerHTML = counterFormatter(currentCounter);
  }
};

//Counter Remove
let counterRemove = function () {
  if (currentCounter > 1 && currentCounter <= sliderTotalItems) {
    currentCounter--;
    currentSlide.innerHTML = counterFormatter(currentCounter);
    navCounter.innerHTML = counterFormatter(currentCounter);
  }
};

//Set Active Nav
let setActiveNav = function () {
  for (let nv = 0; nv < navItems.length; nv++) {
    let myNavNumber = parseInt(navItems[nv].getAttribute("data-nav"));

    if (myNavNumber === currentCounter) {
      navItems[nv].classList.add("jl-item-active");

      anime({
        targets: ".jl-item-active",
        width: "90",
      });
    }
  }
};

//Set Active Slide
let setActiveSlide = function () {
  for (let sld = 0; sld < sliderItem.length; sld++) {
    let mySlideNumber = parseInt(sliderItem[sld].getAttribute("data-slide"));

    if (mySlideNumber === currentCounter) {
      sliderItem[sld].classList.add("jl-slide-active");
      sliderItem[sld]
        .querySelector(".jl-portfolio-item-box")
        .classList.add("jl-scale-right");
    }
  }
};

let changeActive = function () {
  for (let rm = 0; rm < navItems.length; rm++) {
    navItems[rm].classList.remove("jl-item-active");

    anime({
      targets: navItems[rm],
      width: "20",
    });
  }

  for (let rms = 0; rms < sliderItem.length; rms++) {
    sliderItem[rms].classList.remove("jl-slide-active");
  }

  setActiveNav();
  setActiveSlide();
};

//ACTIONS
totalSlide.innerHTML = counterFormatter(sliderTotalItems);

anime({
  targets: ".jl-item-active",
  width: "90",
});

nextItem.addEventListener("click", function () {
  nextSlideAnim();
  counterAdd();
  changeActive();
});

firstItem.addEventListener("click", function () {
  prevSlideAnim();
  counterRemove();
  changeActive();
});
