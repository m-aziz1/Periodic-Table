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
      blockInfo(
        anArray[found].category,
        anArray[found].number,
        anArray[found].symbol,
        anArray[found].name
      );
    } else {
      blockInfo("placeholder");
    }
  }

  // stop recursion
  if (yInd === columns) {
    return;
  }

  //repeat for all rows
  yInd++;
  createElements(anArray, rowLength, columns, yInd);
}

//CREATE AND APPEND INFO BLOCK
function blockInfo(descriptor, number, symbol, name) {
  const elementBlock = Object.assign(document.createElement("div"), {
    classList: `grid-item ${descriptor}`,
  });

  tableGrid.append(elementBlock);

  if (descriptor != "placeholder") {
    //atomic numbers
    const atomicNumber = Object.assign(document.createElement("p"), {
      classList: "atomic-number",
      innerHTML: `${number}`,
    });

    //element eymbols
    const elSymbol = Object.assign(document.createElement("p"), {
      classList: "el-symbol",
      innerHTML: `${symbol}`,
    });

    //element names
    const elName = Object.assign(document.createElement("p"), {
      classList: "el-name",
      innerHTML: `${name}`,
    });

    elementBlock.append(atomicNumber, elSymbol, elName);

    elementBlock.addEventListener("click", () => textBox(name));
  }
}

function textBox(text) {
  alert(text);
}
