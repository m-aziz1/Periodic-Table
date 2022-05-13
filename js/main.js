//PERIODIC TABLE

//Element Array
let elements = new ElementsArray();

//DOCUMENT ELEMENTS
const tableGrid = document.getElementById("periodic-table");

//GRID
function createElements(anArray, rowLength, columns, yInd = 1) {
  for (let i = 1; i <= rowLength; i++) {
    let found = elements.find(i, yInd);

    if (found > -1) {
      //Element Blocks
      blockInfo(i, yInd, null, anArray[found].symbol, anArray[found].name);
    } else {
      blockInfo(i, yInd, "placeholder", null, null);
    }
  }

  let found = elements.find(2, 1);

  // Stop Recursion
  if (yInd === columns) {
    return;
  }

  //Repeat for all Rows
  yInd++;
  createElements(anArray, rowLength, columns, yInd);
}

function blockInfo(xInd, yInd, descriptor, symbol, name) {
  const elementBlock = Object.assign(document.createElement("div"), {
    classList: `grid-item ${descriptor}`,
    id: `xpos-${xInd}-ypos-${yInd}`,
  });

  //Atomic Numbers
  const atomicNumber = Object.assign(document.createElement("p"), {
    classList: "atomic-number",
    innerHTML: `${yInd}`,
  });

  //Element Symbols
  const elSymbol = Object.assign(document.createElement("p"), {
    classList: "el-symbol",
    innerHTML: `${symbol}`,
  });

  //Element Names
  const elName = Object.assign(document.createElement("p"), {
    classList: "el-name",
    innerHTML: `${name}`,
  });

  tableGrid.append(elementBlock);
  elementBlock.append(atomicNumber, elSymbol, elName);
}
