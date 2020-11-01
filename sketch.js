//Create variables here
var dogimg,dog,happydog
var foodS,foodstock
var database

function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png");
  happydog = loadImage("images/dogImg1")
}

function setup() {
	createCanvas(500, 500);
  dogimg = createSprite(250,250,60,60) 
  
}


function draw() {  

  drawSprites();
  //add styles here

}



