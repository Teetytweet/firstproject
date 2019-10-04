var tree = createSprite(100,200);
tree.setAnimation("tree2");
tree.scale = 0.3;

var count=0;
var sup=randomNumber(10,70);



var present = createSprite (250,200);
present.setAnimation("present");
present.scale = 0.3;

var pizza = createSprite(150,200);
pizza.setAnimation("pizza");

pizza.visible = false;

var panda = createSprite(280,200);
panda.setAnimation("panda");

panda.visible = false;




function draw() {
  background("tomato");
  
  //balloons
 // strokeWeight(0.5);
  //fill("lightblue");
  //ellipse(55,90,90,130);
  //ellipse(324,175,70,100);
  //strokeWeight(1);
  //line(55, 156, 55, 400);
  //line(322,225,322,400);
  
  //tree
  

  
  
  //shake the present
if (mouseDidMove()) {
  World.frameRate = 15;
    present.rotation = randomNumber(-5,5);
  count++;
  
} 

//click for a suprise
if (count==sup) {
    present.visible = false;
    
    pizza.visible = true;
    
    panda.visible = true;
    
 

   }
   
   panda.rotation+=1;
   pizza.rotation = randomNumber(10,20);
  
  drawSprites();
  //text
  fill("limegreen");
  textSize(30);
  //text("Happy Birthday!",100,90);
  text("Merry Christmas!",90,70);
  textSize(20);
  text("shake the present to see a suprise!",35,340);
  //text("a suprise!", 35, 345);
}
