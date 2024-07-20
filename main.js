//------create function slide-bar(hidding & showing)
let menuIcon = document.getElementById("menu-icon");
let slideBar = document.getElementById("slide-bar");
function showMenu() {
  menuIcon.classList.toggle("fa-times");
  slideBar.classList.toggle("active");
}
//hide the sidebar when clicking anywhere outside of it
document.addEventListener("click", function (event) {
  if (!slideBar.contains(event.target) && !menuIcon.contains(event.target)) {
    if (slideBar.classList.contains("active")) {
      slideBar.classList.remove("active");
      menuIcon.classList.remove("fa-times");
    }
  }
});

// ******************************************************************************************

// -----create function (show search bar )
let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".search-form");

function showbar() {
  searchBtn.classList.toggle("fa-times");
  searchForm.classList.toggle("active");
}

//hide the searchForm when clicking anywhere outside of it
document.addEventListener("click", function (event) {
  if (!searchForm.contains(event.target) && !searchBtn.contains(event.target)) {
    if (searchForm.classList.contains("active")) {
      searchForm.classList.remove("active");
      searchBtn.classList.remove("fa-times");
    }
  }
});

// **************************************************************************************
// -----create function (show login-Form )
let loginBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form");
let hideBtn = document.querySelector("#hide-btn");

function showlogin() {
  loginForm.classList.add("active");
}
function hidinglogin() {
  loginForm.classList.remove("active");
}

// ******************************************************************************************
//-----------------------------create function for section slider
let vidBtn = document.querySelectorAll(".video-btn");

 // using foreach to remove the color of the span when I click on it
vidBtn.forEach((slide) => {
  slide.addEventListener("click", function () {
    document.querySelector(".controls .blue").classList.remove("blue");
    slide.classList.add("blue");
    // add videos to the slider & change video when i click to the another span 
    let src = slide.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});
