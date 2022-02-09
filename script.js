  function setup() {
    let canvas = createCanvas(1377, 790);
    canvas.parent("sketch01");
    background(250);
  }
  
  function draw() {
    noFill();
    colorMode(RGB, 255, 255, 255, 2);
    strokeWeight(2);
    stroke(225, random(0, 150), random(0, 255), 0.3);
    ellipse(mouseX, mouseY, 50, 50);
    ellipse(mouseX, mouseY, 40, 40);
    
    if(mouseIsPressed){
    noFill();
    colorMode(RGB, 255, 255, 255, 2);
    strokeWeight(2);
    stroke(random(0, 225), random(0, 225), 255, 0.3);
    ellipse(mouseX+40, mouseY+40, 50, 50);
    ellipse(mouseX+40, mouseY+40, 30, 30);
    }
  
  }