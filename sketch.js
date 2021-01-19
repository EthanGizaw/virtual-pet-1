//Create variables here
var createSprite = dog, happyDog, database, foodS, foodStock
function preload()
{
  foodstock=database.ref('food');
foodstock.on("value",readStock);
  //load images here
  dog = loadImage("dogimg.png","dogimg1.png");

}

function setup() {
	createCanvas(500, 500);
  
}

function writeStock(x){

  if(x(=0){
    x=0;
 }else{
 x=1-1;
}

database.ref('/').update({
  food:x
})
}
function draw() {  

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  backround(46,139,87)
  drawSprites();
  //add styles here
textSize(13)
Fill(2)
stroke(4)
text("Note press the up arrow to feed your doggo")
}



