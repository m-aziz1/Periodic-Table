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
  //Create Grid and Identities
  createElements(18, 10);
}

function createElements(rowLength, yRows, yInd = 1) {
  for (let i = 1; i <= rowLength; i++) {
    //Element Blocks
    const elementBlock = Object.assign(document.createElement("div"), {
      classList: "grid-item",
      id: `xpos-${i}-ypos-${yInd}`,
    });

    //Atomic Numbers
    const atomicNumber = Object.assign(document.createElement("p"), {
      classList: "atomic-number",
      innerHTML: `${i}`,
    });

    //Element Symbols
    const elSymbol = Object.assign(document.createElement("p"), {
      classList: "el-symbol",
      innerHTML: "H",
    });

    //Element Names
    const elName = Object.assign(document.createElement("p"), {
      classList: "el-name",
      innerHTML: "Hello",
    });

    tableGrid.append(elementBlock);
    elementBlock.append(atomicNumber, elSymbol, elName);
  }

  // Stop Recursion
  if (yInd === yRows) {
    return;
  }

  //Repeat for all Rows
  yInd++;
  createElements(rowLength, yRows, yInd);
}
