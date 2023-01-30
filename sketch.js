let num = 1;
let turn = 0;
let steps = 1;
let s = steps;
let count = 3;
let offset = 6;
let size = 0;
let x,y;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  x = windowWidth/2;
  y = windowHeight/2;
  frameRate(1000);
}
function draw() { 
  if(size == 20 ){
    fill(168, 58, 50);
  }
  if (frameCount % 600 == 0) {
    fill(random(255,50), random(255,50), random(255,50));
  }
  if(s==0){
    count--;
    turn++;
    size++;
    if(turn == 5){
      turn = 1;
    }
    s = steps;
  }
  if(count == 0){
    count=2;
    steps+=1;
    s = steps;
  }
  switch(turn){
    case 1:
      x+=offset;
      break;
    case 2:
      y-=offset;
      break;
    case 3:
      x-=offset;
      break;
    case 4:
      y+=offset;
      break;
  }
  if(isPrime(num)){
    circle(x,y,4);
  }
  s--;
  num++;
  if(size == 200){
    noLoop();
  }

}

function isPrime(x){
  if(x == 1) {
    return false;
  }
  for(i = 2; i<= sqrt(x) ;i++){
    if(x%i==0){
      return false;
    }
  }
  return true;
}
