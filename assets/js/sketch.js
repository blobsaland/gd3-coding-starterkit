const main = document.getElementById("main");

let options = {
  video: {
    facingMode: {
      exact: "environment"
    }
  }
}
let img = []

let x1, x2, y1, y2 = 0

let canvasSizeWidth
let canvasSizeHeight;


function preload() {
  // img[0] = loadImage("assets/images/building/broken.png");

  // for (let i = 0; i < imgs.length; i++) {
  //   if (!(formDataObj[imgs[i].name] === undefined)) {
  //     console.log("load img: " + imgs[i].name, +"hey source: " + imgs[i].imgSource)
  //   }
  // }
}

function windowResized() {
  canvasSizeWidth = main.offsetWidth;
  canvasSizeHeight = windowHeight;
  resizeCanvas(canvasSizeWidth, canvasSizeHeight)
}

function setup() {
  windowResized()

  createCanvas(canvasSizeWidth, canvasSizeHeight);
  drawLayer = createGraphics(windowWidth, windowHeight);
  prevLayer = createGraphics(windowWidth, windowHeight);
  menuLayer = createGraphics(windowWidth, windowHeight);

  // capture = createCapture(VIDEO);
  background(220)

  // loadImage("assets/images/building/basic.jpg, drawImage");
  
  noLoop();
}

function draw() {

    // image(capture, 0, 0, width, height, 0, 0, capture.width, capture.height, COVER, CENTER);
    // capture.hide();
  
    background(0)
    image(drawLayer, 0, 0);
    image(prevLayer, 0, 0);
    image(menuLayer, 0, 0);
  
  }
  
  function touchStarted(event) {
    x1 = mouseX
    y1 = mouseY
  }
  
  function touchEnded(event) {
    x2 = mouseX
    y2 = mouseY
    // drawLayer.image(img[0], x1, y1, x2 - x1, y2 - y1);
  }
  
  function touchMoved() {
    prevLayer.clear()
    x2 = mouseX
    y2 = mouseY
    console.log(x2, y2)
    if (!(x1 - x2 === 0 || y1 - y2 === 0)) {
      prevLayer.image(img[0], x1, y1, x2 - x1, y2 - y1);
  
    };
  }

  