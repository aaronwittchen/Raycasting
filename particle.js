class Particle {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    this.rainbowMode = false; // Toggle for rainbow mode

    for (let a = 0; a < 360; a += 1) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  update(x, y) {
    this.pos.set(x, y);
  }

  toggleRainbow() {
    this.rainbowMode = !this.rainbowMode;
  }

  look(walls) {
    if (this.rainbowMode) {
      colorMode(HSB);
    }

    let index = 0;
    for (let ray of this.rays) {
      let closest = null;
      let record = Infinity;
      for (let wall of walls) {
        const pt = ray.cast(wall);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest) {
        if (this.rainbowMode) {
          stroke(map(index, 0, this.rays.length, 0, 360), 255, 255, 100);
        } else {
          stroke(255, 100);
        }
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
      index++;
    }

    if (this.rainbowMode) {
      colorMode(RGB); // Reset color mode back to default
    }
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4);
    for (let ray of this.rays) {
      ray.show();
    }
  }
}

// Toggle rainbow mode when 'B' is pressed
function keyPressed() {
  if (key === 'B' || key === 'b') {
    particle.toggleRainbow();
  }
}
