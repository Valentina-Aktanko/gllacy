let page = document.querySelector(".page");
let slider = document.querySelector(".special-offers");

let slide1 = slider.querySelector(".special-offers__item:first-child");
let slide2 = slider.querySelector(".special-offers__item:nth-child(2)");
let slide3 = slider.querySelector(".special-offers__item:nth-child(3)");

let sliderControll1 = slider.querySelector(".slider-controll__item:first-child");
let sliderControll2 = slider.querySelector(".slider-controll__item:nth-child(2)");
let sliderControll3 = slider.querySelector(".slider-controll__item:nth-child(3)");

let toggleThemeGreen = slider.querySelector("#toggle-theme-green"); 
let toggleThemeBlue = slider.querySelector("#toggle-theme-blue"); 
let toggleThemePink = slider.querySelector("#toggle-theme-pink"); 

toggleThemeGreen.addEventListener("click", function (event) {
  event.preventDefault();

  page.classList.remove("theme-blue");
  page.classList.remove("theme-pink");
  page.classList.add("theme-green");

  slider.classList.remove("theme-blue");
  slider.classList.remove("theme-pink");
  slider.classList.add("theme-green");

  slide2.classList.remove("special-offers__item_current");
  slide3.classList.remove("special-offers__item_current");
  slide1.classList.add("special-offers__item_current");
  
  sliderControll2.classList.remove("slider-controll__item_current");
  sliderControll3.classList.remove("slider-controll__item_current");
  sliderControll1.classList.add("slider-controll__item_current");
});

toggleThemeBlue.addEventListener("click", function (event) {
  event.preventDefault();

  page.classList.remove("theme-green");
  page.classList.remove("theme-pink");
  page.classList.add("theme-blue");

  slider.classList.remove("theme-green");
  slider.classList.remove("theme-pink");
  slider.classList.add("theme-blue");

  slide1.classList.remove("special-offers__item_current");
  slide3.classList.remove("special-offers__item_current");
  slide2.classList.add("special-offers__item_current");
  
  sliderControll1.classList.remove("slider-controll__item_current");
  sliderControll3.classList.remove("slider-controll__item_current");
  sliderControll2.classList.add("slider-controll__item_current");
});

toggleThemePink.addEventListener("click", function (event) {
  event.preventDefault();

  page.classList.remove("theme-greem");
  page.classList.remove("theme-blue");
  page.classList.add("theme-pink");

  slider.classList.remove("theme-greem");
  slider.classList.remove("theme-blue");
  slider.classList.add("theme-pink")

  slide1.classList.remove("special-offers__item_current");
  slide2.classList.remove("special-offers__item_current");
  slide3.classList.add("special-offers__item_current");
  
  sliderControll1.classList.remove("slider-controll__item_current");
  sliderControll2.classList.remove("slider-controll__item_current");
  sliderControll3.classList.add("slider-controll__item_current");
});