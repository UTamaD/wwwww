int i=0;

function setup() {
  size(512,512);
  background(255);
  frameRate(30);
}


function draw() {
    if(i<width){
      i=i+6;
      stroke(0);
      line(0,i,i,height);
      line(width-0,height-i,width-i,height-height);
      line(width,height-i,i,height);
      line(0,i,width-i,0);
    
  }
  
  
  
  
}