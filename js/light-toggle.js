//LIGHT AND DARK MODE TOGGLE

let darkMode = localStorage.getItem("dark-mode");

const toggleBtn = document.querySelector(".light-toggle");

function enableDarkMode() {
  localStorage.setItem("dark-mode", "enabled");
  updatePage("black", "lightyellow", "black", "lightblue", "Light Mode");
}

function disableDarkMode() {
  localStorage.setItem("dark-mode", "disabled");
  updatePage("white", "black", "lightyellow", "midnightblue", "Dark Mode");
}

if (darkMode === "enabled") {
  enableDarkMode();
}

toggleBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

//UPDATE PAGE COLORS
const h1 = document.querySelector("h1");
const h2 = document.querySelectorAll("h2");

function updatePage(bodyClr, btnClr, txtClr, headClr, btnTxt) {
  document.body.style.backgroundColor = bodyClr;
  toggleBtn.style.backgroundColor = btnClr;
  toggleBtn.style.color = txtClr;
  h1.style.color = headClr;
  h2.forEach((element) => {
    element.style.color = headClr;
  });
  toggleBtn.innerHTML = btnTxt;
}
