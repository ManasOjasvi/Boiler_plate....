
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  
  fixedRect2 = createSprite(400, 400, 50, 50);
  fixedRect2.shapeColor = "green";

  fixedRect3 = createSprite(600, 600, 50, 50);
  fixedRect3.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect, movingRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else if(isTouching(fixedRect2, movingRect)) {
    fixedRect2.shapeColor = "blue"
    movingRect.shapeColor = "blue";
  } 
  else if(isTouching(fixedRect3, movingRect)) {
    fixedRect3.shapeColor = "blue"
    movingRect.shapeColor = "blue"
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect2.shapeColor = "green"
    fixedRect.shapeColor = "green"
    fixedRect3.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}



