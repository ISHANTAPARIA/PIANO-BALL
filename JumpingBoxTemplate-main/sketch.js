var canvas;
var music;
var box1,box2,box3,box4;
var ball;
var ed1,ed2,ed3,ed4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(1200,600);

    ball=createSprite(random(40,1070),200,50,50);
   ball.shapeColor="white"; 
   
   box1=createSprite(150,590,255,20);
   box1.shapeColor="blue";
    box2=createSprite(450,590,255,20);
    box2.shapeColor="green";
    box3=createSprite(750,590,255,20);
   box3.shapeColor="red";
   box4=createSprite(1050,590,255,20);
   box4.shapeColor="yellow";

   ed1=createSprite(600,0,1200,1);
   ed2=createSprite(0,300,1,600);
   ed3=createSprite(1200,300,1,600);

  
}

function draw() {
    background(0);
if(keyDown("space")){
    ball.velocityY=5;
    ball.velocityX=5;
}
if(ball.isTouching(box1)){
    ball.bounceOff(box1);
    ball.shapeColor="blue";
    music.play();
}
if(ball.isTouching(box2)){
    ball.bounceOff(box2);
    ball.shapeColor="green";
    music.play();
}
if(ball.isTouching(box3)){
    ball.bounceOff(box3);
    ball.shapeColor="red";
    music.play();
}
if(ball.isTouching(box4)){
    ball.bounceOff(box4);
    ball.shapeColor="yellow";
    music.play();
}
if(ball.isTouching(ed1)){
    ball.bounceOff(ed1);  
    music.stop();
}
if(ball.isTouching(ed2)){
    ball.bounceOff(ed2);
    music.stop();
}
if(ball.isTouching(ed3)){
    ball.bounceOff(ed3);
    music.stop();
}
    drawSprites();
}

function bounceOff(object1,object2){
    if(object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x-object1.x < object2.width/2 + object1.width/2)
  {
   object1.velocityX=object1.velocityX * (-1);
   object2.velocityX=object2.velocityX * (-1);
    }
    if( object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y-object1.y < object2.height/2 + object1.height/2)
      {
        object1.velocityY=object1.velocityY * (-1);
        object2.velocityY=object2.velocityY * (-1);
    }
  }