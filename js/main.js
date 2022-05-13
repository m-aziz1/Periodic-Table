//PERIODIC TABLE

//Element Array
let elements = new ElementsArray();

//DOCUMENT ELEMENTS
const tableGrid = document.getElementById("periodic-table");

//GRID
function createElements(anArray, rowLength, columns, yInd = 1, elNum = 0) {
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

    elNum++;
  }

  let found = elements.find(2, 1);
  
  console.log(found);
  // Stop Recursion
  if (yInd === columns) {
    return;
  }

  //Repeat for all Rows
  yInd++;
  createElements(anArray, rowLength, columns, yInd, elNum);
}
