var x;
var y;
var numCircles;
var radius;

function setup() {
  createCanvas(800,800);
numCircles = int(8);
radius = 800/(numCircles*2);
}

function draw() {
drawcircles(radius, numCircles);
}



function drawcircles(var radius, var n) {
 n = int(0);
 x = radius;
 y = height/2;
  while (n < numCircles){
  fill(255*n/numCircles);
    circle(x, y, radius*2);
   x += radius*2;
   n += 1;
  }
}
