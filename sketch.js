var sea, seaImg;
var ship, shipImg;

function preload(){
shipImg = loadAnimation("ship-2.png","ship-1.png","ship-3.png","ship-1.png","ship-2.png","ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(800,800)
  
  //criação do mar
  sea = createSprite(200,200,50,50);
  sea.addImage("sea.png",seaImg);

  //criação do barco
  ship = createSprite(150,500,50,50);
  ship.addAnimation("barquinho",shipImg);
  ship.scale=0.35;
  
  bordas = createEdgeSprites();
}

function draw() {
  background("blue");

  //velocidad do mar
  sea.velocityX=-2
  if(sea.x<0){
    sea.x=sea.width/2
  }
  drawSprites();
}
