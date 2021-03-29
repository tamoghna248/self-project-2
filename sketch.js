var boy,boyImg;
var coin,coinImg;
var backImg,back;
var coinGroup;
var ground;
var score;
function preload(){
boyImg=loadAnimation("main photo/a1.png","main photo/b1.png","main photo/c1.png",
"main photo/d1.png")
coinImg=loadImage("PHOTOS/coin.png")
backImg=loadImage("PHOTOS/back1.jpg")



}
function setup(){
createCanvas(windowWidth,windowHeight);
back=createSprite(0,0)
back.addAnimation("s",backImg)
back.scale=4.5

boy=createSprite(70,height-90);
boy.addAnimation("t",boyImg);
ground=createSprite(width/2,650,width,5)
ground.visible=false;
score=0;


coinGroup=createGroup();


}
function draw(){
background(0);
if(back.x<0){
back.x=back.width/2

}
back.velocityX=-2
if(keyDown("up_arrow")&&boy.y>490){
    boy.y=boy.y-3;
    
}

console.log(boy.y)
/*if(keyDown("down_arrow")&&boy.y<567){
   boy.y=boy.y+3;
    
}*/
/*if(keyDown("right_arrow")){
    boy.x=boy.x+3;
    
}*/
if(keyDown("space")&&boy.y>540){
    boy.velocityY=-20;
    
}
boy.collide(ground)
boy.velocityY=boy.velocityY+0.8
if(coinGroup.isTouching(boy)){
    coinGroup[0].destroy();
    score++
}

spawncoin();

drawSprites();
textSize(30);
stroke ("red")
strokeWeight(3)
fill ("white")
text ("score: "+score,width-200,50)

}
function spawncoin(){
if(frameCount%100===0){
    var coin = createSprite(width,150)
    coin.addImage("a",coinImg);
    coin.y=Math.round(random(200,400));
    coin.velocityX=-2;
    coin.scale=0.2
    coinGroup.add(coin);
}

}