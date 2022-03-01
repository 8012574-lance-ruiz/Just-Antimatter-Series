let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(125, 150, 75);
  grid = new Grid(0, 0, 10, 10, 10, 10, Cell);
  
  //let specificCell = grid.getCell(5, 9)  
  //let specificCell2 = grid.getCell(5, 10)
}

function draw() {
  grid.debugRender();
}