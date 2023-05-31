const main = document.getElementById("main");

let x1, x2, y1, y2 = 0

let canvasSizeWidth
let canvasSizeHeight;

function windowResized() {
  canvasSizeWidth = main.offsetWidth;
  canvasSizeHeight = windowHeight;
  resizeCanvas(canvasSizeWidth, canvasSizeHeight)
}

function setup() {
  windowResized()
  
  capture = createCapture(VIDEO);
  createCanvas(canvasSizeWidth, canvasSizeHeight);
  drawLayer = createGraphics(windowWidth, windowHeight);
  prevLayer = createGraphics(windowWidth, windowHeight);

  imgBrush[0] = loadImage("./assets/images/building/basic.jpg", loadBrushImage())
}

function draw() {
  background(0)
  image(drawLayer, 0, 0);
  image(prevLayer, 0, 0);
}

function loadBrushImage() {
  console.log("brush changed to: " + imgBrush)
}

function touchStarted(event) {
  x1 = mouseX
  y1 = mouseY
}

function touchEnded(event) {
  x2 = mouseX;
  y2 = mouseY;
  if (x2 - x1 >= 10 || y2 - y1 >= 10) {
    if (loadBrushImage) {
      drawLayer.image(imgBrush[0], x1, y1, x2 - x1, y2 - y1);
    }
  };
}

function touchMoved() {
  prevLayer.clear()
  x2 = mouseX;
  y2 = mouseY;
  console.log(x2, y2)
  if (x2 - x1 >= 10 || y2 - y1 >= 10) {
    if (loadBrushImage) {
      prevLayer.image(imgBrush[0], x1, y1, x2 - x1, y2 - y1);
    }

  };
}