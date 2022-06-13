//LIGHT AND DARK MODE TOGGLE

let darkMode = localStorage.getItem("dark-mode");

const toggleBtn = document.querySelector(".light-toggle");

function enableDarkMode() {
  localStorage.setItem("dark-mode", "enabled");
  document.body.style.backgroundColor = "black";
  toggleBtn.style.backgroundColor = "lightyellow";
  toggleBtn.style.color = "black";
  headersColor("lightblue");
}

function disableDarkMode() {
  localStorage.setItem("dark-mode", "disabled");
  document.body.style.backgroundColor = "white";
  toggleBtn.style.backgroundColor = "black";
  toggleBtn.style.color = "lightyellow";
  headersColor("midnightblue");
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

function headersColor(color) {
  const h1 = document.querySelector("h1");
  h1.style.color = color;
  const h2 = document.querySelectorAll("h2");
  h2.forEach((element) => {
    element.style.color = color;
  });
}
