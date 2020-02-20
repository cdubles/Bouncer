var balls=[]; // aray for all balls
//set bg color and size
function setup() {
  createCanvas(windowWidth,windowHeight);
  background("black");

}
//gives ball color, draw and move them
function draw() {
background("black");
  for(var i=0; i<balls.length;i++){
    var x = balls[i].x;
    var y = balls[i].y;
    r = balls[i].red;
    b = balls[i].blue;
    g = balls[i].green;
    fill(r,g,b);
    circle(x,y,50);
  }
  move();

}

//movement and collision
function move(){
  for(var i=0; i<balls.length;i++){
      balls[i].x = balls[i].x + balls[i].vx;
      balls[i].y = balls[i].y + balls[i].vy;
      var x = balls[i].x;
      var y = balls[i].y;
      if(x>=windowWidth-10 || x<0){
          balls[i].vx = -balls[i].vx;
        //  balls[i].vy = -balls[i].vy;
          continue;
      }
      if(y>=windowHeight-10 || y<0){
          //balls[i].vx = -balls[i].vx;
          balls[i].vy = -balls[i].vy;
          continue;
      }
  }

}
//clear array when c is pressed
function keyPressed(keyC){
  print("clearing");
  balls.splice(0,balls.length);
}
//add touch control
function touchStarted() {
  var rc = Math.floor(Math.random() * 255);
  var gc = Math.floor(Math.random() * 255);
  var bc = Math.floor(Math.random() * 255);
  var xv = (Math.random() * 5)*2+3;
  var yv = (Math.random() * 5)*2+3;
  if(Math.random()<.5){xv=-xv}
  if(Math.random()<.5){yv=-yv}
  var ball = {x:mouseX, y:mouseY, vx:xv, vy:yv, red: rc, green:gc, blue:bc};
  balls.push(ball);
  print(balls);
  }
