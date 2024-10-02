function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  for (var i = 50; i > 0; i--){
    push();
    strokeWeight(0);
    translate(width/2, height/2);
    rotate(frameCount * 0.05 - (i * 20))
    scale(i * 0.75);
    switch(i % 5){
      case 0:
        fill(74,139,255);
        break;
      case 1:
        fill(74,255,111);
        break;
      case 2:
        fill(218,255,74);
        break;
      case 3:
        fill(255,174,74);
        break;
      case 4:
        fill(151,74,255);
        break;
      default:
        break;
    }
    square(-10, -10, 20);
    pop();

  }


}
