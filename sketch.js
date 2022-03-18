var edges;
var trex ,trex_running;
var ground,ground_img;
var invisibleground;
function preload(){
        trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
        ground_img=loadImage("ground2.png");
}

function setup(){
        createCanvas(600,200)
      edges=createEdgeSprites();
      trex=createSprite(40,180,20,20)
      trex.addAnimation("running",trex_running)
      trex.scale=0.5
      ground=createSprite(200,185,400,10);
      ground.velocityX=-4;
      ground.x=ground.width/2;
      ground.addImage("groundimg",ground_img);
      invisibleground=createSprite(200,193,400,10)
      invisibleground.visible=false;
}

function draw(){
      background(220)
      if(keyDown("space")&&trex.y>=150){
        trex.velocityY=-10
      }
      trex.velocityY=trex.velocityY+0.8
      trex.collide(invisibleground)
      if(ground.x<30){
        ground.x=ground.width/2;
      }
      drawSprites()

}
