var cSize, degree, angle, scaleFactor, lastBreak, degSlide;

function setup() {
  cSize = min(windowWidth, windowHeight);
  angle = radians(2);
  setDegree(4);
  degSlide = createSlider(3, 1000, 5);
  degSlide.changed(reset);

  createCanvas(cSize, cSize);
  setFrameRate(30);
  colorMode(HSB);
  background(0);
  noFill();
}

function setDegree(deg) {
  degree = deg;
  var theta = (degree - 2) * PI / degree
  scaleFactor = sin(theta) / (sin(angle) + sin(PI - theta - angle));
}

function drawPoly() {
  beginShape();
  for(var i = 0; i < degree; i++) {
    strokeWeight(log(frameCount) / degree);
    var vx = sin(i * TWO_PI / degree) / 2;
    var vy = cos(i * TWO_PI / degree) / 2;
    for(var t = 0; t < log(log(degree)); t++) {
      vx *= cos(vx) * cos(vx * log(frameCount));
      vy *= cos(vy) * cos(vy * log(frameCount));
    }
    vertex(cSize * vx, cSize * vy);
  }
  endShape(CLOSE);
}

function draw() {
  var f = frameCount - lastBreak;
  var sf = pow(scaleFactor, f);
  stroke((log(frameCount) * degree) % 360, 100, 100);
  translate(width / 2, height /2);
  rotate(sin(f / degree) * angle * degree);
  scale(sf);
  drawPoly();
}

function reset() {
  background(0);
  lastBreak = frameCount
  setDegree(degSlide.value());
}
