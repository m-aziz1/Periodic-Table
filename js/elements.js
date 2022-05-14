class ElementsArray {
  constructor() {
    this.list = [];
    this.fromFile("https://m-aziz1.github.io/Periodic-Table/data.json");
  }

  //Methods
  fromFile(pathway) {
    fetch(pathway)
      .then((rawData) => rawData.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          this.list.push(data[i]);
        }
        //Create Grid and Identities
        createElements(this.list, 18, 10);
      });
  }

  find(xCoord, yCoord) {
    //returns -1 if value does not exist
    return this.list.findIndex(
      (listEl) => listEl.xpos === xCoord && listEl.ypos === yCoord
    );
  }
}
