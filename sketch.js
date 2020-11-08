
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground,jungle,bgimage;
var FoodGroup, obstacleGroup;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  bgimage = loadImage("jungle.jpg");
  
  
}



function setup() {
createCanvas(600,400);
  
monkey=createSprite(50,342,10,10);
monkey.addAnimation("running", monkey_running); 
monkey.scale=0.1; 
  
ground=createSprite(-9,346,2000,10)

 obstacleGroup = createGroup();
 monkeyGroup = createGroup();
 bananaGroup = createGroup();
 
jungle=createSprite(300,200);
 jungle.addImage(bgimage);
 jungle.scale=0.7;  

}


function draw() {
background(500);  
 drawSprites();     
 if(keyWentDown("space")&& monkey.y >= 1) {
        monkey.velocityY = -12;
      
        
    }
   monkey.velocityY = monkey.velocityY + 0.6;
   monkey.collide(ground);
   monkeyGroup.add(monkey); 
   
  
  
  if ((frameCount % 100 == 0) && (monkey.velocityY != 0)){
   obstacle = createSprite(640,294,10,40);
   obstacle.velocityX = -4;
   obstacle.addImage(obstaceImage); 
   obstacle.scale=0.2;
   obstacle.lifetime=165;
   obstacleGroup.add(obstacle); 
  }  
    
  if ((frameCount % 200 == 0) && (monkey.velocityY != 0)){
   banana = createSprite(640,204,10,40);
   banana.velocityX = -4;
   banana.addImage(bananaImage); 
   banana.scale=0.1;
   banana.lifetime=160;
   bananaGroup.add(banana);  
}  
  fill("red");
  textSize(40);  
  text("SCORE:"+score,300,60);
  
  if(monkeyGroup.isTouching(obstacleGroup) && (monkey.scale==0.1) ) {
      monkey.scale=0.05;
  }
    if(monkeyGroup.isTouching(obstacleGroup) && (monkey.scale==0.05) ) {
     monkey.scale =0.1;
     fill("black");
     textSize(40);  
     text("GAME OVER",200,200); 
     monkey.velocityY=0;
     banana.velocityX=0;
     obstacle.velocityX=0;
      score = 0;
      
    }

    
 if(monkeyGroup.isTouching(bananaGroup)){
      bananaGroup.destroyEach(); 
      score=score+2;
    }
   
 monkey.depth = monkey.depth + 1;
}



