var bg,sleep, brush, gym, eat, bath, move;
var astronaut;


function preload(){
  bg= loadImage("imagenes/iss.png");
  sleep = loadAnimation("imagenes/sleep.png");
  brush = loadAnimation("imagenes/brush.png");
  gym = loadAnimation("imagenes/gym1.png","imagenes/gym1.png","imagenes/gym2.png","imagenes/gym2.png");
}



function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  
  
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill("white")
  text("Instrucciones:",20, 35);
  textSize(15);
  text("Flecha hacia arriba = Cepillarse",20, 55);
  text("Flecha hacia abajo= Ejercitarse",20, 70);
  text("Flecha hacia la izquierda = Comer",20, 85);
  text("Flecha hacia la derecha = Bañarse",20, 100);
  text("tecla m = Moverse",20, 115);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
}