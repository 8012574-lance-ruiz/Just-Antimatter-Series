const updateRate = 10

let grid;
let playerX;
let playerY;
let playerAngle;
let playerFOV = 60; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(updateRate);

  grid = new Grid(0, 0, windowHeight, windowHeight, 10, 10, Cell);
  playerX = grid.x + grid.width / 2
  playerY = grid.y + grid.height / 2
  //let specificCell = grid.getCell(5, 9)  
  //let specificCell2 = grid.getCell(5, 10)
}

function movePlayer(deltaX, deltaY, deltaAngle) {
  playerX += deltaX;
  playerY += deltaY;
  playerAngle += deltaAngle;
}

function renderDebugInfo() {
  fill(255);
  let currentFrameRate = frameRate()
  text(`FPS: ${round(currentFrameRate)} FT: ${1/currentFrameRate}`, 10, windowHeight - 20 );
  text(`F#: ${frameCount} MP: ${mouseX}, ${mouseY}`, 10, windowHeight - 8);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(125, 150, 75);
  grid.debugRender();
  renderDebugInfo();
  ellipse(playerX, playerY, 25, 25);
}