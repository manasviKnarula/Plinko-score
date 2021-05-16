const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var engine,world;
var particles;
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=200;
var score =0;
var count = 0;
var gameState = "start";


function setup() {
  createCanvas(900,1000);
engine = Engine.create();
world=engine.world;
ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}


function draw() {
  background("black");


  textSize(20);
  text("Score: "+score,20,40)
  fill("white");

  textSize(25);
  fill("white");
  text("1000",5,550);
  text("1000",80,550);
  text("1000",160,550);
  text("1000",240,550);
  text("500",320,550);
  text("500",400,550);
  text("500",480,550);
  text("100",560,550);
  text("100",640,550);
  text("100",720,550);
  text("100",800,550);

  Engine.update(engine);
  ground.display();

  if ( gameState =="end") {
  
    textSize(90);
    text("GameOver", 150, 300);
  }

  
  for (var a = 0; a < plinkos.length; a++) {
    plinkos[a].display();  
 }

   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>760)
       {
             if (particle.body.position.x < 300) 
             {
                 score=score+500;      
                 particle=null;

                 if ( count>= 5) gameState ="end";                          
             }


             else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
             {
                   score = score + 100;
                   particle=null;


                   if ( count>= 5) gameState ="end";

             }
             else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
             {
                   score = score + 200;
                   particle=null;


                   if ( count>= 5)  gameState ="end";

             }      
             
       }
 
     }

  for (var b = 0; b < divisions.length; b++) 
  {
    divisions[b].display();
  }

}


function mousePressed()
{
 if(gameState!=="end")
 {
     count++;
    particle=new Particle(mouseX, 10, 10, 10); 
 }   
}
