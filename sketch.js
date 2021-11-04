
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var asteroid;
var person;
var space,space_img;


function preload () 
{
  space_img = loadImage('space.png');
  asteroid = loadImage('asteroid.png')
  person = loadImage('person.png')

} 

function setup() {
  createCanvas(650,600);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  image(space_img,width/300,height/300,800,800);
  Engine.update(engine);


  
}
function asteroid() {
  var asteroid = createSprite(0,Math.round(random(20, 370)), 10, 10);
  asteroid.addImage(asteroidImage);
  asteroid.velocityY = 3;
  asteroid.lifetime = 150;
  asteroid.scale = 0.1;
  asteroid.add(asteriod)

}
asteroid();

