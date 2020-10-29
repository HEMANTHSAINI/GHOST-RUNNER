var tower,door,climber,ghost,invisibleblock;
var towerImage,doorImage,climberImage,ghostImage;
var doorsgroup,climbersgroup,invisibleblockgroup;
var gamestate="play";
var spooky;
function preload(){
  
  towerImage=loadImage("tower.png");
  
  doorImage=loadImage("door.png");
  doorsgroup=new Group();
  
  climberImage=loadImage("climber.png");
  climbersgroup=new Group();
  
  invisibleblockgroup=new Group();
  
  ghostImage=loadImage("ghost-standing.png");
  
  spooky=loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  spooky.loop();
  
  tower=createSprite(300,300);
  tower.addImage("tower",towerImage);
  tower.velocityY=1;
  
  ghost=createSprite(200,200,50,50);
  ghost.scale=0.3;
  ghost.addImage("ghost",ghostImage);
}

function draw(){
  background(0);
  if(gamestate==="play"){
     
  if(tower.y>400){
    tower.y=300;
     
 }
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
    
  }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
    
  }
    if(keyDown("space")){
    ghost.velocityY=-5;
    
  }
  
  ghost.velocityY=ghost.velocityY+0.8;
  
  if(climbersgroup.isTouching(ghost)){
     ghost.velocityY=0;
  }
  
  if(invisibleblockgroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gamestate="end";
    }
  
  spawndoors();
  drawSprites();
}
  if(gamestate==="end"){
    stroke("yellow");
    fill("yellow");
    textSize(40);
    text("GAMEOVER",250,250);
  }
}
function spawndoors(){
  if(frameCount%240===0){
    
   door=createSprite(200,-50);  
  door.addImage("door",doorImage);
    
  climber=createSprite(200,10); 
  climber.addImage("climber",climberImage);
   
  invisibleblock=createSprite(200,15);
  invisibleblock.width=climber.width;
  invisibleblock.height=2; 
    
  door.x=Math.round(random(120,400));
  door.velocityY=1;
    
  climber.x=door.x;
  invisibleblock.x=door.x;
  climber.velocityY=1;
  invisibleblock.velocityY=1;
    
  ghost.depth=door.depth;
  ghost.depth+=1;
    
  door.lifetime=800;
  climber.lifetime=800; 
  invisibleblock.lifetime=800; 
    
  doorsgroup.add(door);
  climbersgroup.add(climber);
   invisibleblockgroup.add(invisibleblock) ;
}
  
}
