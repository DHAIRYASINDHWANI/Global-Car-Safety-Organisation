var car , wall;
var speed , weight;


function setup() {
  createCanvas(1600,400);
 car = createSprite(500, 200, 70, 70);
 wall = createSprite(1500,200,60,height/2);
 wall.shapeColor = color(80,80,80);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  
  if(wall.x - car.x < car.width/2 + wall.width/2){
car.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22509;
if(deformation > 180){
car.shapeColor = (255,0,0);
//car.shapeColor = "red";
}
if(deformation < 180 && deformation > 100){
  car.shapeColor = color(230,230,0);
  //car.shapeColor = "yellow";
  }
  if(deformation > 100 ){
    car.shapeColor = color(0,255,0);
    //car.shapeColor = "green";
    }
  }
  
  
  
  
  drawSprites();
}