var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  car.shapeColor = "grey";
  wall= createSprite(1500,200,60, height/2);
  wall.shapeColor="grey";

  speed= random(55,90);
  weight=random(400,1500);
  car.velocityX = speed;
}

function draw() {
  background("pink");  
  if(wall.x - car.x < car.width + wall.width/2){
    deformation();
  }

  drawSprites();
}

function deformation(){
 
    car.velocityX=0;
    //wall.velocityX= 0;
    var deformaton = (0.5 * weight * speed * speed) / 22500;
    if(deformaton > 180 ){
      car.shapeColor= "red";
      fill("red");
      textSize(100);
      text("deformation > 180", 350, 200);
    }
    if(deformaton < 180 && deformaton > 100){
      car.shapeColor= "yellow";
      fill("yellow")
      textSize(100);
      text("100> deformation < 180 ", 200, 200);
    }
    if(deformaton < 100){
      car.shapeColor= "green";
      fill("green")
      textSize(100);
      text("deformation < 100", 350, 200);
    }
}