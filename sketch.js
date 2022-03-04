const updateRate = 10

let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(updateRate);

  grid = new Grid(windowWidth/4, windowHeight/4, windowWidth/2, windowHeight/2, 3, 3, Cell);
  
  //let specificCell = grid.getCell(5, 9)  
  //let specificCell2 = grid.getCell(5, 10)
}

function renderDebugInfo() {
  fill(255);
  text(`Frametime: ${round(frameRate(), 2)}`, 10, windowHeight - 20);
  text(`F#: ${frameCount} MP: ${mouseX}, ${mouseY}`, 10, windowHeight - 8);
}

function draw() {
  background(125, 150, 75);
  grid.debugRender();
  renderDebugInfo();
}