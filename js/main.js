//PERIODIC TABLE

datafromURL("https://m-aziz1.github.io/Periodic-Table/data.json");

function datafromURL(address) {
  fetch(address)
    .then((rawData) => rawData.json())
    .then((data) => {
      let tableElements = [];
      for (let i = 0; i < data.length; i++) {
        tableElements.push(data[i]);
      }

      //Create Grid and Identities
      let keyNames = Object.getOwnPropertyNames(data[0]);
      let exclude = [
        "spectral_img",
        "xpos",
        "ypos",
        "cpk-hex",
        "ionization_energies",
      ];
      removeValues(keyNames, exclude);

      generateElementsTable(keyNames, tableElements, 18, 10);
    });
}

function findPos(anArray, xCoord, yCoord) {
  //returns -1 if value does not exist
  return anArray.findIndex(
    (listEl) => listEl.xpos === xCoord && listEl.ypos === yCoord
  );
}

function removeValues(modify, remove) {
  for (let i = 0; i < remove.length; i++) {
    let ind = modify.findIndex((property) => property === remove[i]);
    modify.splice(ind, 1);
  }
}

//DOCUMENT ELEMENTS
const tableGrid = document.getElementById("periodic-table");
const extraInfoDiv = document.getElementById("extra-info-container");

function buildTable(element, keys) {
  deleteNodes(extraInfoDiv);
  //create HTML elements
  const table = document.createElement("table");
  const tBody = document.createElement("tbody");
  const tHead = document.createElement("thead");

  tHead.innerHTML = `<tr><th colspan='2'>${element.name}</th></tr>`;

  table.classList.add("info-table");
  table.appendChild(tHead);

  for (let i = 0; i < keys.length; i++) {
    const tr = document.createElement("tr");
    tr.append(
      Object.assign(document.createElement("td"), {
        innerHTML: `<strong>${keys[i].replaceAll("_", " ")}</strong>`,
      }),
      Object.assign(document.createElement("td"), {
        innerHTML: `${element[keys[i]]}`,
      })
    );

    tBody.appendChild(tr);
    table.appendChild(tBody);
  }

  extraInfoDiv.appendChild(table);
}

//GRID
function generateElementsTable(keys, anArray, rowLength, columns, yInd = 1) {
  for (let i = 1; i <= rowLength; i++) {
    let found = findPos(anArray, i, yInd);

    if (found > -1) {
      blockInfo(anArray[found].category, anArray[found], keys);
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
  generateElementsTable(keys, anArray, rowLength, columns, yInd);
}

//CREATE AND APPEND INFO BLOCK
function blockInfo(descriptor, anArray, keys) {
  const elementBlock = Object.assign(document.createElement("div"), {
    classList: `grid-item ${descriptor}`,
  });

  tableGrid.append(elementBlock);

  if (descriptor != "placeholder") {
    //atomic numbers
    const atomicNumber = Object.assign(document.createElement("p"), {
      classList: "atomic-number",
      innerHTML: `${anArray.number}`,
    });

    //element eymbols
    const elSymbol = Object.assign(document.createElement("p"), {
      classList: "el-symbol",
      innerHTML: `${anArray.symbol}`,
    });

    //element names
    const elName = Object.assign(document.createElement("p"), {
      classList: "el-name",
      innerHTML: `${anArray.name}`,
    });

    elementBlock.append(atomicNumber, elSymbol, elName);

    elementBlock.addEventListener("click", () => buildTable(anArray, keys));
  }
}

function deleteNodes(container) {
  while (container.childNodes.length > 0) {
    container.removeChild(container.lastChild);
  }
}
