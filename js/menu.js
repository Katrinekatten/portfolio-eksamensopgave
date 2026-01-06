// DARK MODE\\
// const moon = document.querySelector(".moon");

// moon.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
//   document.getElementById("moon_dm").src = "img/illustrationer/sun.svg";
// });

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
