let slider = document.querySelector(".special-offers");

let toggleSlide1 = slider.querySelector("#toggle-theme-green"); 
let toggleSlide2 = slider.querySelector("#toggle-theme-blue"); 
let toggleSlide3 = slider.querySelector("#toggle-theme-pink"); 

function changeTheme(theme) {
  let page = document.querySelector(".page");
  let slider = document.querySelector(".special-offers");

  if (theme === "theme-green") {
    page.classList.remove("theme-blue");
    page.classList.remove("theme-pink");
    page.classList.add("theme-green");
    slider.classList.remove("theme-blue");
    slider.classList.remove("theme-pink");
    slider.classList.add("theme-green");
  } else if (theme === "theme-blue") {
    page.classList.remove("theme-green");
    page.classList.remove("theme-pink");
    page.classList.add("theme-blue");
    slider.classList.remove("theme-green");
    slider.classList.remove("theme-pink");
    slider.classList.add("theme-blue");
  } else if (theme === "theme-pink") {
    page.classList.remove("theme-green");
    page.classList.remove("theme-blue");
    page.classList.add("theme-pink");
    slider.classList.remove("theme-green");
    slider.classList.remove("theme-blue");
    slider.classList.add("theme-pink");
  }
}

function changeSlide(currentSlide) {
  let slider = document.querySelector(".special-offers");
  
  let slide1 = slider.querySelector(".special-offers__item:first-child");
  let slide2 = slider.querySelector(".special-offers__item:nth-child(2)");
  let slide3 = slider.querySelector(".special-offers__item:nth-child(3)");

  if (currentSlide === "slide1") {
    slide2.classList.remove("special-offers__item_current");
    slide3.classList.remove("special-offers__item_current");
    slide1.classList.add("special-offers__item_current");
  } else if (currentSlide === "slide2") {
    slide1.classList.remove("special-offers__item_current");
    slide3.classList.remove("special-offers__item_current");
    slide2.classList.add("special-offers__item_current");
  } else if (currentSlide === "slide3") {
    slide1.classList.remove("special-offers__item_current");
    slide2.classList.remove("special-offers__item_current");
    slide3.classList.add("special-offers__item_current");
  }
}

function changeCurrentControll(currentSlide) {
  let slider = document.querySelector(".special-offers");

  let controll1 = slider.querySelector(".slider-controll__item:first-child");
  let controll2 = slider.querySelector(".slider-controll__item:nth-child(2)");
  let controll3 = slider.querySelector(".slider-controll__item:nth-child(3)");

  if (currentSlide === "slide1") {
    controll2.classList.remove("slider-controll__item_current");
    controll3.classList.remove("slider-controll__item_current");
    controll1.classList.add("slider-controll__item_current");
  } else if (currentSlide === "slide2") {
    controll1.classList.remove("slider-controll__item_current");
    controll3.classList.remove("slider-controll__item_current");
    controll2.classList.add("slider-controll__item_current");
  } else if (currentSlide === "slide3") {
    controll1.classList.remove("slider-controll__item_current");
    controll2.classList.remove("slider-controll__item_current");
    controll3.classList.add("slider-controll__item_current");
  }
}

toggleSlide1.addEventListener("click", function (event) {
  event.preventDefault();

  changeTheme("theme-green");
  changeSlide("slide1");
  changeCurrentControll("slide1");
});

toggleSlide2.addEventListener("click", function (event) {
  event.preventDefault();

  changeTheme("theme-blue");
  changeSlide("slide2");
  changeCurrentControll("slide2");
});

toggleSlide3.addEventListener("click", function (event) {
  event.preventDefault();

  changeTheme("theme-pink");
  changeSlide("slide3");
  changeCurrentControll("slide3");
});