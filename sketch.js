let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(125, 150, 75);
  outline(0, 0, 0, 0);
  frameRate(1);

  grid = new Grid(0, 0, 700, 700, 40, 40, Cell);
  
  //let specificCell = grid.getCell(5, 9)  
  //let specificCell2 = grid.getCell(5, 10)
}

function draw() {

  grid.debugRender();
}