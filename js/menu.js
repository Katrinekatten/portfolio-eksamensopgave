const moon = document.querySelector(".moon");
const icon = document.getElementById("moon_dm");

moon.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.src = "img/illustrationer/sun.svg";
  } else {
    icon.src = "img/illustrationer/moon.svg";
  }
});

// burgermenu
const burger = document.querySelector(".burger");
const navmenuWrapper = document.querySelector(".wrapper_navmenu");

burger.addEventListener("click", () => {
  navmenuWrapper.classList.toggle("active");
});
