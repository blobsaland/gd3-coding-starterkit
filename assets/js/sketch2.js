const main = document.getElementById("main");

let x1, x2, y1, y2 = 0

let canvasSizeWidth
let canvasSizeHeight;

let capture;
let liveCapture = "on";

function windowResized() {
  canvasSizeWidth = main.offsetWidth;
  canvasSizeHeight = windowHeight;
  resizeCanvas(canvasSizeWidth, canvasSizeHeight)
}

function setup() {
  windowResized()

  capture = createCapture(VIDEO);
  capture.hide();

  photo = createGraphics(windowWidth, windowHeight);


  createCanvas(canvasSizeWidth, canvasSizeHeight);
  drawLayer = createGraphics(windowWidth, windowHeight);
  prevLayer = createGraphics(windowWidth, windowHeight);

  imgBrush[0] = loadImage("./assets/images/building/basic.jpg", loadBrushImage())
}

function takePhoto() {
  liveCapture = "off"

  setTimeout(
    function () {
      document.getElementById("step1").classList.add("hidden")
      document.getElementById("defaultCanvas0").style.display = "none"
      document.getElementById("step2").classList.remove("hidden")
      step = 2
    }, 1000);

}

function draw() {
  prevLayer.clear()

  if (liveCapture === "on") {
    image(
      capture,
      0,
      0,
      width,
      height,
      0,
      0,
      capture.width,
      capture.height,
      COVER,
      CENTER
    );
  } else if (liveCapture === "off") {
    image(photo, 0, 0)
  }

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

  if (step === 3) {
    if (x2 - x1 >= 10 || y2 - y1 >= 10) {
      if (loadBrushImage) {
        drawLayer.image(imgBrush[0], x1, y1, x2 - x1, y2 - y1);
      }
    };
  }

}

function touchMoved() {
  x2 = mouseX;
  y2 = mouseY;
  if (step === 3) {
    if (x2 - x1 >= 10 || y2 - y1 >= 10) {
      if (loadBrushImage) {
      console.log("e")
        prevLayer.image(imgBrush[0], x1, y1, x2 - x1, y2 - y1);
      }
    }
  };
}