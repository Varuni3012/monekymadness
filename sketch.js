
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600);
  
  
  monkey =createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1;
  
 ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  console.log(ground.x);
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  

}


function draw() {
background("white");
if (ground.x>0){
    ground.x=ground.width/2;}
  
if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;

}
 
  
  monkey.velocityY = monkey.velocityY + 0.8 ;
   monkey.collide(ground);
  
  
  
  if (frameCount % 80 === 0){
     banana = createSprite(600,165,5,20);
   banana.velocityX = -6;
    banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage)
    banana.setLifetime=100;
    banana.scale=0.08;
    FoodGroup.add(banana);
  }
  
  
  if (frameCount % 300 === 0){
  obstacle = createSprite(600,165,5,20);
   obstacle.velocityX = -6;
    obstacle.y = Math.round(random(300,350));
  obstacle.addImage(obstacleImage)
    obstacle.scale=0.1
    obstacle.setLifetime=100;
    obstacleGroup.add(obstacle);
  }
  if(obstacleGroup.collide(monkey)){
    FoodGroup.velocityX=0;
    obstacleGroup.velocityX=0;
    ground.velocityX=0;
  }
  
  
  drawSprites();

  
  stroke("black");
  fill(" black")
  textSize(20);
  score=Math.ceil(frameCount/frameRate());
  text("SurvivalTime:"+score,100,50);
}



