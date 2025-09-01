// 2D Visibility
// Ray Casting

let walls = [];
let ray;
let particle;

function setup() {
  // Responsive canvas: max 1600px, else fit window
  let cWidth = min(windowWidth, 1600);
  let cHeight = min(windowHeight, 1200);
  createCanvas(cWidth, cHeight);
  noCursor();

  walls = [];
  for (let i = 0; i < 8; i++) {
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }

  // Boundary walls
  walls.push(new Boundary(0, 0, width, 0));
  walls.push(new Boundary(width, 0, width, height));
  walls.push(new Boundary(width, height, 0, height));
  walls.push(new Boundary(0, height, 0, 0));

  particle = new Particle();
}

function windowResized() {
  let cWidth = min(windowWidth, 1200);
  let cHeight = min(windowHeight, 1200);
  resizeCanvas(cWidth, cHeight);
  // Optionally, you could regenerate walls here if you want them to fit the new size
}

function draw() {
  background(0);
  for (let wall of walls) {
    wall.show();
  }
  particle.update(mouseX, mouseY);
  particle.show();
  particle.look(walls);

  // FPS counter
  textSize(18);
  fill(0, 255, 0);
  textAlign(LEFT, TOP);
  text('FPS: ' + nf(frameRate(), 2, 1), 10, 10);

  textSize(24);
  fill(225);
  textAlign(RIGHT, TOP);
  text('Press B for rainbow', width - 10, 10);
}
