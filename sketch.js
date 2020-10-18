var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(300,100, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true
  movingRect = createSprite(300,200,50,50)
  movingRect.shapeColor="green"
  movingRect.debug=true
  movingRect.velocityY=-3
  fixedRect.velocityY=+3
}

function draw() {
  background(0);
  //movingRect.x=World.mouseX
  //movingRect.y=World.mouseY;  
 


bounceOff(movingRect,fixedRect);


  drawSprites();
}

function bounceOff(p1,p2){
  if(p1.x - p2.x <= p2.width/2 + p1.width/2 &&
    p2.x - p1.x <= p2.width/2 + p1.width/2 ){
    p2.velocityX=p2.velocityX*(-1)
    p1.velocityX=p1.velocityX*(-1)
    }
    if(p1.y - p2.y <= p2.height/2 + p1.height/2 &&
      p2.y - p1.y <= p2.height/2 + p1.height/2){
        p2.velocityY=p2.velocityY*(-1)
        p1.velocityY=p1.velocityY*(-1)
      
    }

}