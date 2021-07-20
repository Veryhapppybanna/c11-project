 var boy, boy_running
 var path, pathImg 
 var invisibleSide_right,invisibleSide_left

function preload(){
  //pre-load images
  boy_running = loadAnimation("Runner-1.png","runner-2.png");
  pathImg = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,180,400,20);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  
  boy = createSprite(200,300,20,50);
  boy.addAnimation("running",boy_running);
  boy.scale = 0.09;

  invisibleSide_right = createSprite(400,400,100,800);
  invisibleSide_right.visible = false;
  
  invisibleSide_left = createSprite(10,400,100,400)
  invisibleSide_left.visible = false;

  
}

function draw() {
  background(0);

  if(path.y > 400){

    path.y = height/2;

  }

  boy.x = World.mouseX;

  boy.collide(invisibleSide_right);
  boy.collide(invisibleSide_left);


 
  drawSprites();
}
