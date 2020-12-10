var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,height/2,50,10);
    bullet.shapeColor = ("80,80,80");
  wall = createSprite(1200,200,thickness,height/2);
    wall.shapeColor = ("gray");

  bullet.x = 50;
  bullet.y = 200;

}

function draw() {
  background(0,0,0);

  bullet.velocityX = speed;

  if (collided(bullet,wall)) {
    bullet.velocityX = 0;
    
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

      if (damage <= 10) {
        wall.shapeColor = ("green");
      }

      if (damage > 10) {
        wall.shapeColor = ("red");
      }

  }

  drawSprites();
}

function collided(bullet,wall) {

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }

    return false;
}