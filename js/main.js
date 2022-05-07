//PERIODIC TABLE

//Create Array of Elements
let elements;
fetch("../data/periodic-table-data.json")
  .then((rawData) => rawData.json())
  .then((data) => (elements = data));

