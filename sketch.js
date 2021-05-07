var tank,tankImg;
var pcar, pcarImg;
var soilImg;
var bullet, bulletImg;
var score;
var BulletGrp, PcarGrp;

function preload(){

  tankImg = loadImage("indianTank.png");
  pcarImg = loadImage("chinaCar.png");
  soilImg = loadImage("Soil.jpg");
  bulletImg = loadImage("tankBullet.png");
}

function setup() {
  createCanvas(1200,600);

 tank = createSprite(1100, 300, 50, 50);
 tank.addImage(tankImg);
 tank.scale=0.3; 

 PcarGrp = new Group();
BulletGrp= new Group();
}

function draw() {
  background(soilImg);  

if(keyDown(UP_ARROW)){
  tank.y=tank.y-5;
}
 if(keyDown(DOWN_ARROW)){
   tank.y=tank.y+5
   }
   if(keyDown(LEFT_ARROW)){
    tank.x=tank.x-5;
  }
  if(keyDown(RIGHT_ARROW)){
    tank.x=tank.x+5;
  }


if(keyDown("SPACE")){
  fire();
}




police();

  drawSprites();
}
function police (){
  if(frameCount%150===0){
    pcar=createSprite(0,Math.round(random(30,570)),20,20);
    pcar.velocityX=3;
    pcar.addImage(pcarImg);
    pcar.scale=0.3

PcarGrp.add(pcar)
  }
}
function fire(){
  bullet=createSprite(500,300,30,30);
  bullet.addImage(bulletImg);
  bullet.x=tank.x;
  bullet.y=tank.y;
  bullet.scale=0.15
  bullet.rotation=180

  bullet.depth=tank.depth-1;
  bullet.velocityX=-7

  BulletGrp.add(bullet)
}