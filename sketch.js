var monkey,monkey_running,banana,obstacle,backImage,backImage2,back_Image,score,ground;
var obstacles;
var BananasGroup,ObstaclesGroup;


function preload(){
  
  monkey_running=
  loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  obstacle_rock= loadImage("stone.png");
  banana_food= loadImage("banana.png");
  back_Image= loadImage("jungle.jpg");
  
}

function setup() {
  createCanvas(500,400);
  
  
  backImage = createSprite(240,200,1,1);
  backImage.addImage("background",back_Image);
  backImage.scale=0.54;
  
  backImage2 = createSprite(770,200,1,1);
  backImage2.addImage("background",back_Image);
  backImage2.scale=0.54;


  monkey = createSprite(70,300,400,20);
  monkey.addAnimation("monkeyrunning", monkey_running);
  monkey.scale=0.08;
 // monkey.debug=true;
  
  ground = createSprite(200,310,400,0.0001);
  
  score=0;
  
  BananasGroup = new Group();
  ObstaclesGroup = new Group();
  
}

function draw() {
  background("green");
 
  

   
   backImage.velocityX=-7;
   backImage2.velocityX=-7;
  
  if (backImage.x<-300) {
   backImage.x=770;
   }
  
 if (backImage2.x<-300) {
   backImage2.x=770;
   }
    monkey.collide(ground);
  monkey.velocityY=monkey.velocityY+0.8;
  if(keyDown("space")&& monkey.y >=270 ){
      monkey.velocityY = -17 ;
  }
    
    
   
    
    if(monkey.isTouching(ObstaclesGroup)){
    monkey.scale=0.08;
      score=0;
    }
    
     if(monkey.isTouching(BananasGroup)){
       BananasGroup.destroyEach();
       score=score+2;
    
    }
    
  switch(score) {
      case 10: monkey.scale=0.10;
              break;
      case 20: monkey.scale=0.11;
              break;
      case 30: monkey.scale=0.12;
              break;
      case 40: monkey.scale=0.13;
              break;
      default: break;
    }
    
  

  
  
  
  
  
  

  spawnObstacles();
  spawnBananas();
  drawSprites();
   
  stroke("red");
  textSize(20);
  text("Score: "+ score, 390,40);
 
}

function spawnObstacles() {
  
    if(frameCount % 90 === 0) {
    var obstacle = createSprite(600,300,10,40);
    obstacle.velocityX = -7;
    obstacle.lifetime = 300;
    obstacle.addImage("rock",obstacle_rock);
    obstacle.scale=0.15;
   // obstacle.debug=true;
    ObstaclesGroup.add(obstacle);
    }
}
function spawnBananas() {
  
    if(frameCount % 90 === 0) {
    var banana = createSprite(600,200,10,40);
    banana.velocityX = -7;
    banana.lifetime = 300;
    banana.addImage("banana",banana_food);
    banana.scale=0.04;
    banana.y=random(100,200);
    BananasGroup.add(banana);
      
    }
}













