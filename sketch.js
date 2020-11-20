var movingrectangle;
var fixedrectangle;


function setup() {
  createCanvas(1200,400);
  fixedrectangle=createSprite(200, 200, 50, 80);
  fixedrectangle.shapeColor="black";
  movingrectangle=createSprite(400,200,80,30);
  movingrectangle.shapeColor="black"
}

function draw() {
  background("red");
  movingrectangle.x=mouseX ;
  movingrectangle.y=mouseY;
  if(movingrectangle.x-fixedrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
    fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2 &&
    movingrectangle.y-fixedrectangle.y<fixedrectangle.width/2+movingrectangle.width/2&&
    fixedrectangle.y-movingrectangle.y<fixedrectangle.width/2+movingrectangle.width/2 ){
    fixedrectangle.shapeColor="pink";
    movingrectangle.shapeColor="pink";
  }
  else
  {
    movingrectangle.shapeColor="black";
    fixedrectangle.shapeColor="black";
  }
  drawSprites();
}