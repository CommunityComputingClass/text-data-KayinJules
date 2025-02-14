let myMessage = "1 for dog, 2 for cat"
let xLocation = 30
let yLocation = 10
let ymove = 5
let xmove = 5
let dogpic;
let dogs = []
let dogimgs = []
let catpic;
let cats = []
let catimgs = []
let animals = []
let randlow = 0
let randhigh = 3
let animalimgs = []
let dogcount = 0
let catcount = 0

let myFont;
function preload(){
  myFont = loadFont("ATHEROSSER.ttf")
  /// load dogs
  dogpic1 = loadImage('dogphoto.png');
 let dogpic2 = loadImage('dogphoto2.png');
  let dogpic3 = loadImage('dogphoto3.png');
  animalimgs.push (dogpic1)
  animalimgs.push (dogpic2)
  animalimgs.push (dogpic3)
  /// load cats
  catpic4 = loadImage('catphoto.png');
  let catpic5 = loadImage('catphoto2.png');
  let catpic6 = loadImage('catphoto3.webp');
  let catpic7 = loadImage('catphoto4.webp');
  animalimgs.push (catpic4)
  animalimgs.push (catpic5)
  animalimgs.push (catpic6)
  animalimgs.push (catpic7)
}
function setup() {
  createCanvas(400, 500);
  console.log (animalimgs)
  imageMode(CENTER)

}
function draw() {
  background(50);

  //make dogs
  for (let i=0; i<animals.length; i++){
    animals [i].drawanimal()
  }
    //make cats
   // for (let i=0; i<animals.length; i++){
   //   cats [i].drawanimal()
   // }
  ///text bounce
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
  ///// make counters
  textFont(myFont)
  textSize(25);
  text("dogcount= "+dogcount, 30, 460)
  textFont(myFont)
  textSize(25);
  text("catcount= "+catcount, 200, 460)

}
//////////////MAKEDOGSANDCATS///////////////
function keyPressed(){
if (key === '1'){
  dogcount = dogcount +1
  console.log (dogcount)
  randlow = 0
  randhigh = 3
  let a =new animal()
  animals.push (a)
  }
if (key === '2'){
  catcount = catcount +1
  console.log (catcount)
  randlow = 4
  randhigh = 7
  let a =new animal()
  animals.push (a)
  }
///////////////////////////
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

class cat {
  constructor(){
  this.x = random(0,400)
  this.y = random(0,400)
  this.rot = random(0,360)
  this.img = catimgs[int(random(0,4))]
  }
  drawcat (){
    push()
    translate(this.x,this.y);
    rotate(this.rot)
    image (this.img,0, 0,100,100,)
    pop()
  }
  
}
class animal {
  constructor(type){
    this.x = random(0,400)
  this.y = random(0,400)
  this.rot = random(0,360)
  this.type=type
  this.img = animalimgs[int(random(randlow,randhigh))]
  }
  drawanimal(){
    push()
    translate(this.x,this.y);
    rotate(this.rot)
    image (this.img,0, 0,100,100,)
    pop()
  }
}
 