const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var world,engine;
var fairy,star,BG,fairyImage,starImage,BGImage;
var music;

function preload(){
	fairyImage=loadImage("images/fairyImage1.png");
	BGImage=loadImage("images/starNight.png");
	starImage=loadImage("images/star.png");
    music=loadSound("sound/JoyMusic.mp3")

}

function setup() {
	createCanvas(400, 400);
 engine=Engine.create();
 world=engine.world;

 var noGravity={
	 isStatic:true
}

 fairy=createSprite(100,300,noGravity);
 fairy.addImage(fairyImage);
 fairy.scale=0.14;
 World.add(world,fairy);

 
 star=createSprite(300,50);
 star.addImage(starImage);
 star.scale=0.1;
 World.add(world,star);

}


function draw() {
  background(BGImage);
  Engine.update(engine);


  if(star.y>275 && star.isTouching(fairy)){

     star.velocityY=0;	
  }
     //fairy.debug=true;
     fairy.setCollider("rectangle",490,-50,300,310);



	 music.play();
 

  keyPressed();

  drawSprites();

}

function keyPressed() {
	//write code here

	if(keyDown("Right_Arrow")){
		fairy.x=fairy.x+3;
	}

	if(keyDown("Left_Arrow")){
		fairy.x=fairy.x-3;
	}

	if(keyDown("Down_Arrow")){
		star.velocityY=6;
	}
}
