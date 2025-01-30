let myMessage = "1 for dog, 2 for cat"
let xLocation = 30
let yLocation = 10
let ymove = 5
let xmove = 5
let dogpic;
let dogs = []

let myFont;
function preload(){
  myFont = loadFont("ATHEROSSER.ttf")
  dogpic = loadImage('dogphoto.png');
}
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  for (let i=0; i<dogs.length; i++){
    dogs [i].drawdog()
  }
  noStroke();
  fill(255);
  textFont(myFont)
  text(myMessage, xLocation, yLocation), 50, 200;
  yLocation = yLocation + ymove
  if (yLocation>400){
    ymove = -10
  }
  else{
    ymove = ymove + Math.abs((ymove*0.1)) + (random (0,0.1))
  }
  yLocation = yLocation + ymove
  if (yLocation>400){
    ymove = -(Math.abs(ymove) +random (0,-10))
  }
  else{
    ymove = ymove + Math.abs((ymove*0.00006)) + (random (0,0.01))


    xLocation = xLocation + xmove
  if (xLocation>400){
    xmove = -random(5, 15)
  }
  if (xLocation<0){
    xmove = random(5, 15)
  }
  }

}
function keyPressed(){
if (key === '1'){
  let d =new dog(50,50)
  dogs.push (d)
  }
}
class dog {
  constructor(x,y){
  this.x = x
  this.y = y
  }
  drawdog (){
    image(dogpic, this.x, this.y)
  }
  
}