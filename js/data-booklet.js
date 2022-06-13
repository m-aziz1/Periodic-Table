//DATA BOOKLET PAGES
let pages = [
  "table of common polyatomic ions",
  "chemistry notation",
  "miscellaneous",
  "standard molar enthalpies of formation",
  "standard molar enthalpies of formation continued",
  "solubility of some common ionic compounds in water flame colour of elements",
  "table of selected standard electrode potentials",
  "relative strengths of acids and bases",
  "relative strengths of acids and bases continued",
  "acid-base indicators",
  "colours of common aqueous Ions",
];

//SEARCHABLE LIST
let objects = [];

//APPEND IMAGES
const pagesContainer = document.getElementById("pages-container");

for (let i = 0; i < pages.length; i++) {
  let number = i + 1;

  const h2 = Object.assign(document.createElement("h2"), {
    innerHTML: `${number}`,
  });

  const img = Object.assign(document.createElement("img"), {
    classList: "page-image",
    src: `../images/page-${number}.png`,
    alt: `Page ${number}`,
    id: `${pages[i]}`,
  });

  objects.push({
    page: h2,
    element: img,
  });

  pagesContainer.append(h2, img);
}

//SEARCH BAR
//call whenever value changes
const searchInput = document.getElementById("page-search");
searchInput.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  for (let i = 0; i < objects.length; i++) {
    const show =
      objects[i]["page"]["innerHTML"].includes(value) ||
      objects[i]["element"]["id"].includes(value);

    objects[i]["page"].classList.toggle("hide", !show);
    objects[i]["element"].classList.toggle("hide", !show);
  }
});
