var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn_red = createButton("Red")
  btn_red.position(100,50);
  btn_red.mousePressed(red_background);
  
  btn_green = createButton("Green")
  btn_green.position(250,50);
  btn_green.mousePressed(green_background);
}

function red_background() {
  background(255,0,0)
}
function green_background() {
  background(0,255,0)
}

