class Cell {
  constructor(row, col, x, y, cellWidth, cellHeight) {
    this.row = row;
    this.col = col;
    this.x = x;
    this.y = y;
    this.width = cellWidth;
    this.height = cellHeight;
    //print(this)
    
    let evenRow = row % 2 === 0;
    let evenCol = col % 2 === 0;
    if ((evenRow || evenCol) && (evenRow !== evenCol)) {
      this.color = color(0, 0, 0, 0.5); 
    }
  }
  
  render() {
    fill(this.color || color(120, 69, 50));
    rect(this.x, this.y, this.width, this.height);
    
    //line(this.x, this.y, this.x + 50, this.y + 50);
  }
}