var bgimg, bg;
var planeimg, plane
var birdimg, bird;
var cloudimg, cloud;
var kiteimg, kite;


function preload()
{
 bgimg = loadImage("assets/background.jpg");
}


function setup()
{
 createCanvas(700,600);
 bg = createSprite(300,320,6,6);
 bg.addImage(bgimg);
 bg.scale = 2.4;
}

function draw()
{
background('black');
drawSprites();
}