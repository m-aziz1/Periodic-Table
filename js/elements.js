class ElementsArray {
  constructor() {
    this.list = [];
  }

  //Methods
  fromFile(pathway) {
    fetch(pathway)
      .then((rawData) => rawData.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          this.list.push(data[i]);
        }
        this.consoleText(1);
      });
  }

  compare(xCoord, yCoord) {
    //returns -1 if value does not exist
    return this.list.findIndex(
      (element) => element.xpos === xCoord && element.ypos === yCoord
    );
  }

  consoleText(n) {
    console.log(this.list[n]);
  }
}
