var fixedRect, movingRect;
var ball1, ball2
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 50, 50, 50);
  fixedRect.shapeColor="green"
  movingRect=createSprite(200, 800, 50, 50);
  movingRect.shapeColor="green"

  fixedRect.velocityY=+5
  movingRect.velocityY=-5
}

function draw() {
  background("black");  
  /*
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2&&
    
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){

    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"
  }
  else{
    fixedRect.shapeColor="green"
    movingRect.shapeColor="green"
  }
  */

  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2){
    movingRect.velocityX=movingRect.velocityX*(-1)
    fixedRect.velocityX=fixedRect.velocityX*(-1)
    }
    if(movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2&&
      fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){
      movingRect.velocityY=movingRect.velocityY*(-1)
      fixedRect.velocityY=fixedRect.velocityY*(-1)
      }
  drawSprites();
}