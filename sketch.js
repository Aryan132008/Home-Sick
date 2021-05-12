var MsDavid, Melanie, Sarah, MsDavidImg, P1Img, P2Img, P3Img, P4Img, P5Img;
var P1, P2, P3, P4, P5
var bg

function preload(){
 MsDavidImg = loadImage("D1.png");
 bg = loadImage("feilding-town-centre.png");
 P1Img = loadImage("P1.png");
 P2Img = loadImage("P2.png");
 P3Img = loadImage("P3.png");
 P4Img = loadImage("P3.1.png");
 P5Img = loadImage("P1.1.png");
}
function setup() {
 createCanvas(1200,800);
 MsDavid = createSprite(200 , 600, 20, 20);
 MsDavid.addImage("MsDavid",MsDavidImg);
 MsDavid.scale = 0.3;


 //Melanie = createSprite(1000 , 150, 20, 20);
 //Sarah = createSprite(1000, 600 , 20, 20);
 //P1 = createSprite(200 , 600, 20, 20);
 //P1.addImage("P1",P1Img);
 //P1.scale = 0.3;
 //P2 = createSprite(200 , 600, 20, 20);
 //P2.addImage("P2",P2Img);
 //P2.scale = 0.3;
 //P3 = createSprite(200 , 600, 20, 20);
 //P3.shapeColor = "Red";
 //P4 = createSprite(450,600, 20, 20);
 //P5 = createSprite(650,550, 20, 20);
 //P5.shapeColor = "Red";
}

function draw() {
 background(bg);
 //P1.velocityX = -1;
 //P2.velocityX =  1;
// P3.velocityX =  2;
 //P4.velocityX = -1;
 //P5.velocityX = -2;

//if(P5.isTouching(P3)){
 //P5.velocityX = 0;
 //.velocityX = 0;
 //playSound()
//}
if(keyDown(RIGHT_ARROW)){
  MsDavid.velocityX = 2;
}
if(keyDown(LEFT_ARROW)){
  MsDavid.velocityX = -2;
}

 spawnPeople();
 drawSprites();
}
function spawnPeople(){
 if(frameCount%130===0){
var people = createSprite(1200 , 600, 20, 20);
people.velocityX = -2;
var rand= Math.round(random(1,3));
switch(rand){
case 1: people.addImage(P1Img);
        people.scale = 0.3;   
        break;
        
case 2: people.addImage(P2Img);
        people.scale = 0.3;  
        break;

case 3: people.addImage(P3Img);
        people.scale = 0.3;  
        break;
}
people.lifetime = 600;
 }
 /*if(frameCount%60===0){
    var people = createSprite(100 , 600, 20, 20);
    people.velocityX = 2;
    var rand= Math.round(random(1,2));
    switch(rand){
      case 1: people.addImage(P4Img);
              people.scale = 0.3;   
              break;
              
      case 2: people.addImage(P5Img);
              people.scale = 0.3;  
              break;
    */    //}

}
