var sea, seaImg;
var ship, shipImg;
var trueSea;

function preload(){
shipImg = loadAnimation("ship-2.png","ship-1.png","ship-3.png","ship-1.png","ship-2.png","ship-4.png");
seaImg = loadAnimation("sea.png");
}

function setup(){
  createCanvas(600,200)
  
  //criação do mar
  sea = createSprite(200,200,50,50);
  sea.addImage("sea.png",seaImg);

  //criação do barco
  ship = createSprite(50,180,50,50);
  ship.addAnimation("barquinho",shipImg);
  
  bordas = createEdgeSprites();

  //ship lock
  trueSea = createSprite(300,186,600,10)
  trueSea.visible = false;
}

function draw() {
  background("blue");

  //colisão com o lock
  ship.collide(trueSea);

  //velocidad do mar
  sea.velocityX=-2
  if(sea.x<0){
    sea.x=sea.width/2
  }
  drawSprites();
}
