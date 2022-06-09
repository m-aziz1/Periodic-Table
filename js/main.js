//PERIODIC TABLE

//DOCUMENT ELEMENTS
const tableGrid = document.getElementById("periodic-table");
const extraInfoDiv = document.getElementById("extra-info-container");

//GET JSON DATA
datafromURL("../data.json");
//"https://m-aziz1.github.io/Periodic-Table/data.json"

//CREATE GROUP HEADERS
const groups = document.getElementById("groups");
for (let i = 1; i <= 18; i++) {
  const numBlock = Object.assign(document.createElement("div"), {
    classList: "group-number",
    innerHTML: `${i}`,
  });

  groups.appendChild(numBlock);
}

function datafromURL(address) {
  fetch(address)
    .then((rawData) => rawData.json())
    .then((data) => {
      let tableElements = [];
      for (let i = 0; i < data.length; i++) {
        data[i]["name"] = data[i]["name"].toLowerCase();
        tableElements.push(data[i]);
      }

      //Create Grid and Identities
      //Data to exclude from table
      let keyNames = Object.getOwnPropertyNames(data[0]);
      let exclude = [
        "name",
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

    //add table generator event
    elementBlock.addEventListener("click", () => buildTable(anArray, keys));
  }
}

//CREATE TABLE WITH INFO
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
    let value = element[keys[i]];
    let units = "";
    //define units
    switch (keys[i]) {
      case "atomic_mass":
        units = "g/mol";
        value = value.toFixed(2);
        break;
      case "boil":
      case "melt":
        units = "K";
        break;
      case "density":
        units = "g/cm<sup>3</sup>";
        break;
      case "molar_heat":
        units = "J/mol * °C";
    }

    const tr = document.createElement("tr");
    tr.append(
      Object.assign(document.createElement("td"), {
        innerHTML: `<strong>${keys[i].replaceAll("_", " ")}</strong>`,
      }),
      Object.assign(document.createElement("td"), {
        innerHTML: `${value} ${units}`,
      })
    );

    tBody.appendChild(tr);
    table.appendChild(tBody);
  }

  extraInfoDiv.appendChild(table);
}

//OTHER FUNCTIONS
function deleteNodes(container) {
  while (container.childNodes.length > 0) {
    container.removeChild(container.lastChild);
  }
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
