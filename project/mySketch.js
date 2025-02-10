let myMessage = "1 for dog, 2 for cat"
let xLocation = 30
let yLocation = 10
let ymove = 5
let xmove = 5
let dogpic;
let dogs = []
let dogimgs = []

let myFont;
function preload(){
  myFont = loadFont("ATHEROSSER.ttf")
  dogpic1 = loadImage('dogphoto.png');
 let dogpic2 = loadImage('dogphoto2.png');
  let dogpic3 = loadImage('dogphoto3.png');
  dogimgs.push (dogpic1)
  dogimgs.push (dogpic2)
  dogimgs.push (dogpic3)
}
function setup() {
  createCanvas(1000, 1000);
  console.log (dogimgs)
  imageMode(CENTER)
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
  let d =new dog()
  dogs.push (d)
  }
}
class dog {
  constructor(){
  this.x = random(0,400)
  this.y = random(0,400)
  this.rot = random(0,360)
  this.img = dogimgs[int(random(0,3))]
  }
  drawdog (){
    push()
    translate(this.x,this.y);
    rotate(this.rot)
    image (this.img,0, 0,100,100,)
    pop()
  }
  
}
