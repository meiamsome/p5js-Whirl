var angle = 10;
var scaleFactor;

function setup() {
  createCanvas(400, 400);
  setFrameRate(8);

  scaleFactor =  cos(radians(angle));
}

function draw() {
  translate(width / 2, height /2);
  rotate(frameCount * angle);
  scale(pow(scaleFactor, frameCount));
  rect(- width / 2, - height / 2, width, height);
}
