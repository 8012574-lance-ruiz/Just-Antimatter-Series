
class Grid {
  constructor(posX, posY, sizeX, sizeY, rows, cols, cellClass) {
  
    /*
    
    this.x = 1
    this.y = 1
    this.width = 1
    this.height = 1
    
  
    this.posX = 1
    this.posY = 1
    this.sizeX = 1
    this.sizeY = 1
      
    
    this.positionX = 1
    this.positionY = 1
    this.sizeX = 1
    this.sizeY = 1
    
    
    this.position = {x = 1, y = 0}
    this.size = {x = 1, y = 5}
    
    */

    this.access = [];
  
    this.x = posX;
    this.y = posY;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.numRows = rows;
    this.numCols = cols;

    this.cellSizeX = this.sizeX / this.numCols;
    this.cellSizeY = this.sizeY / this.numRows;
  
   
    
    
    // start at this grid's origin point
    let xOffset = this.x;
    let yOffset = this.y;
    
    for (let row = 0; row < this.numRows; row++) {
      this.access[row] = [];
      for (let col = 0; col < this.numCols; col++) {
        this.access[row][col] = new cellClass(row, col, xOffset, yOffset, this.cellSizeX, this.cellSizeY);
        xOffset += this.cellSizeX;
      }
      yOffset += this.cellSizeY;
      xOffset = this.x;
    }
  }
  
  getCellsInRow(row) {
    if (row < this.numRows && row >= 0) {
      return this.access[row];
    }
    print("ERR: Row " + col + " is out-of-bounds | min: 0, max: " + this.numRows);
  }
  
  getCellsInCol(col) {
    if (col < this.numCols && col >= 0) {
      return this.access.map(function(value, index) { return value[col]; });
    }
    print("ERR: Col " + col + " is out-of-bounds | min: 0, max: " + this.numCols);
}
  
  getCell(row, col) {
    if (row < this.numRows && row >= 0) {
      if (col < this.numCols && col >= 0) {
          return this.access[row][col];
      } else { print("ERR: Column " + col + " is out-of-bounds _ min: 0, max: " + this.numCols); }
    } else { print("ERR: Row " + row + " is out-of-bounds _ min: 0, max: " + this.numRows); }
  }
  
  
  debugRender() {
    for (let row = 0; row < this.numRows; row++) {
      for (let col = 0; col < this.numCols; col++) {
        let cell = this.access[row][col]
        //cell.color = color(random(1,255), random(1,255), random(1,255))
        //cell.color = color(round(random(0, 1))*255, round(random(0, 1))*255, round(random(0, 1))*255)
        cell.render();
      }
    }
  }
}