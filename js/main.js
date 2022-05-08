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
//Multidimensional Array
var x = new Array(10);

function fillGrid() {
  //10 * 18 grid
  for (let i = 0; i < 180; i++) {
    const elementBlock = document.createElement("div");
    elementBlock.classList.add("grid-item");
    tableGrid.appendChild(elementBlock);
  }
}
