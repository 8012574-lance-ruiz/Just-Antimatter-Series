class Ray {
  constructor(x, y, angle, distance) {
    this.x = x
    this.y = y
    this.angle = angle
    this.distance = distance
  }
  
  debugRender() {
    line(this.x, this.y, this.x + 2, this.y + 2) 
  }
}