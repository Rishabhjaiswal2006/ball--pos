var ball,database,position;


function setup (){
    database= firebase.database();
createCanvas(600,600)

ball=createSprite(100,200,50,50);
ball.shapeColor="blue";

var ballPosition=database.ref('ball/position');
ballPosition.on("value",readPosition,showError);



}

function draw () {
  background(0);

  if(keyDown(UP_ARROW)){
    writePosition(0,-2);
  }
  if(keyDown(DOWN_ARROW)){
    writePosition(0,2);
  }
if(keyDown(RIGHT_ARROW)){
    writePosition(2,0);
  }
  if(keyDown(LEFT_ARROW)){
    writePosition(-2,0);
  }

  drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x': position.x + x,
        'y': position.y + y
    })

}

function readPosition(data){

    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
    console.log("test");
}

function showError(){
    console.log(Error);
}