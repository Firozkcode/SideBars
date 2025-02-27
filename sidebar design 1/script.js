const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuText = document.querySelectorAll(".menuText");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuText.forEach((text, index) => {
    setTimeout(() => {
      text.classList.toggle("open2");
    }, index * 50);
  });
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target) && menu.classList.contains("open")) {
    menu.classList.remove("open");
    menuText.forEach((text, index) => {
      setTimeout(() => {
        text.classList.remove("open2"); // Ensure proper removal
      }, index * 50);
    });
  }
});

// dark light mode

const dayNight = document.querySelector("#themeChangeBtn");
dayNight.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  updateIcon();
});
function themeMode() {
  if (localStorage.getItem("theme") !== null) {
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }
  updateIcon();
}
themeMode();
function updateIcon() {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.remove("fa-moon");
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.remove("fa-sun");
    dayNight.querySelector("i").classList.add("fa-moon");
  }
}