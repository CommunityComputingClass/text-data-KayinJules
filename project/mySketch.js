let myMessage = "greetings!!!!!!!!!"
let xLocation = 30

let myFont;
function preload(){
  myFont = loadFont("ATHEROSSER.ttf")
}
function setup() {
  createCanvas(400, 400);

 
}
function draw() {
  background(50);
  noStroke();
  fill(255);
  textFont(myFont)
  text(myMessage, xLocation, 200), 50, 200;
  xLocation = xLocation + 1
}
