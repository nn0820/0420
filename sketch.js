let hearts = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {
    hearts.push(new Heart(random(width), random(height), random(1, 3)));
  }
}

function draw() {
  background(220);
  for (let heart of hearts) {
    heart.move();
    heart.display();
  }
}

class Heart {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  move() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(255, 0, 0);
    noStroke();
    beginShape();
    vertex(0, -10);
    bezierVertex(-10, -20, -20, 0, 0, 10);
    bezierVertex(20, 0, 10, -20, 0, -10);
    endShape(CLOSE);
    pop();
  }
}