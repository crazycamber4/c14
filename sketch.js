var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImage

var ob1,ob2,ob3,ob4,ob5,ob6

var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
 cloudImage= loadImage("cloud.png")
ob1=loadImage("obstacle1.png");
ob2=loadImage("obstacle2.png");
ob3=loadImage("obstacle3.png");
ob4=loadImage("obstacle4.png");
ob5=loadImage("obstacle5.png");
ob6=loadImage("obstacle6.png");
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
 spawnObstacle() 
  drawSprites();
}
function spawnObstacle(){
if(frameCount%80===0){
obstacle=createSprite(600,170,10,10);
obstacle.velocityX=-3
var bill=Math.round(random(1,6));
switch(bill){
  case 1:obstacle.addImage(ob1);
break
case 2:obstacle.addImage(ob2);
break 
case 3:obstacle.addImage(ob3);
break
case 4:obstacle.addImage(ob4);
break
case 5:obstacle.addImage(ob5);
break
case 6:obstacle.addImage(ob6);
break
}
obstacle.lifetime=200

}
}

//function to spawn the clouds
function spawnClouds(){
 // write your code here
 
 if(frameCount%70===0){
  cloud=createSprite(600,100,40,10);
  cloud.velocityX=-3;
 cloud.addImage(cloudImage); 
 cloud.y=Math.round(random(10,100))
 cloud.scale=0.7

 trex.depth=cloud.depth

 //trex.depth=trex.depth+1

 trex.depth+=1
 cloud.lifetime=200
 }
}
