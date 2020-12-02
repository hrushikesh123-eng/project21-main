var bullet,wall;
var speed,weight,thickness;
var damage;

function setup() {
  createCanvas(1600,400);

  

  wall = createSprite(1000,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  bullet = createSprite(50,200,50,20);
  thickness=Math.round(random(22,83))
    weight = Math.round(random(30,52));
    speed = Math.round(random(223,321));
    bullet.velocityX = speed;
}

function draw() {
  background("black");  

  
    
  



  if(hasCollided(bullet,wall)){
    damage=0.5*weight*speed*speed/(thickness *thickness*thickness);
     
    bullet.velocityX=0;
   if(damage>10){

    wall.shapeColor=("red");
   }
    
  if(damage<10){

    wall.shapeColor=("green");
  }

  }

  drawSprites();
}

function hasCollided(Lbullet,Lwall){

  bulletRightEdge=bullet.x+wall.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
return true;
  }

  return false;

}
