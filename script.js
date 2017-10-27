let bubbles=[];

function setup() { 
  createCanvas(600, 600);
  //for(var i=0; i<20; i++){
    //let x = random(width);
    //let y = random(height);
    //let r = random(10,40)
    //bubbles[i] = new Bubble(x,y,r);
 // }  
} 

function mouseDragged(){
  let r = random(10,40);
  let b = new Bubble(mouseX, mouseY,r);
  bubbles.push(b);
}
function draw() { 
  background(111);
    
  for(var i=0; i<bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();
  }
 }

class Bubble {
  constructor(x,y,r){
    this.x=x;
    this.y=y;
    this.r=r;
  };  
  move(){
    this.x=this.x+random(-5,5);
    this.y=this.y+random(-5,5);
  };  
  show(){
    stroke(255);
    strokeWeight(4);
    noFill();
    
    ellipse(this.x, this.y, this.r*1.5, this.r);
  };
}