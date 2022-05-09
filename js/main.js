//PERIODIC TABLE

//CREATE ARRAY OF ELEMENTS
let elements;
fetch("../data/periodic-table-data.json")
  .then((rawData) => rawData.json())
  .then((data) => (elements = data));

//DOCUMENT ELEMENTS
const tableGrid = document.getElementById("periodic-table");
document.addEventListener("DOMContentLoaded", fillGrid);

//GRID
function fillGrid() {
  //10 * 18 grid
  let countLow = 0;
  let rowLength = 18;
  let countHigh = rowLength;

  for (let i = countLow; i < countHigh; i++) {
    const elementBlock = document.createElement("div");
    elementBlock.classList.add("grid-item");
    tableGrid.appendChild(elementBlock);
    countLow++;
  }
  countHigh += rowLength;

  for (let i = countLow; i < countHigh; i++) {
    const elementBlock = document.createElement("div");
    elementBlock.classList.add("grid-item");
    tableGrid.appendChild(elementBlock);
    countLow++;
  }
  countHigh += rowLength;

  for (let i = countLow; i < countHigh; i++) {
    const elementBlock = document.createElement("div");
    elementBlock.classList.add("grid-item");
    tableGrid.appendChild(elementBlock);
    countLow++;
  }
  console.log(countLow, countHigh);
}

function appendLoop() {
  let countLow = 0;
  let rowLength = 18;
  let countHigh = rowLength;

  for (let i = countLow; i < countHigh; i++) {
    const elementBlock = document.createElement("div");
    elementBlock.classList.add("grid-item");
    tableGrid.appendChild(elementBlock);
    countLow++;
  }
  
}

// for (let i = 0; i < 180; i++) {
//   const elementBlock = document.createElement("div");
//   elementBlock.classList.add("grid-item");
//   tableGrid.appendChild(elementBlock);
// }
