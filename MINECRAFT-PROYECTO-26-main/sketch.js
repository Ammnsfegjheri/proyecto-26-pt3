var playerPaddle, computerPaddle, ball, edges
var paddle1, paddle2, ballImage, bg;
var edges;

function preload(){
    paddle1=loadImage("B1.png");
    paddle2=loadImage("B2.png");
    ballImage=loadImage("Ball2.png");
    bg=loadImage("TT.png");
}
    
function setup(){
  createCanvas(600,600)
  playerPaddle = createSprite(580, 200, 10, 70);
  computerPaddle = createSprite(20, 300, 10, 70);
  ball = createSprite(300,300,10,10);
  playerPaddle.addImage("B1",paddle1);
  playerPaddle.scale=0.4;
  computerPaddle.addImage("B2",paddle2);
  computerPaddle.scale=0.4;
  ball.addImage("Ball2.png", ballImage);
  ball.scale=0.4;
    
  
  
    edges=createEdgeSprites();
    
  
  
  
}

function draw(){
  background(bg);
  
 // Agregar el código adecuado para mostrar el mensaje en la pantalla
 textSize(20);
 fill("white");
 text("presiona barra espaciadora para iniciar",150, 150)
    
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
    
// Agregar el código para mover la paleta
playerPaddle.y=mouseY;

    

// Agregar el nombre clave adecuado en el código keyDown
   if(keyDown("space")){
          
     ball.velocityX = 6;
     ball.velocityY = 6;}
  
  drawSprites();
}
