var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var turn = 0;
var particles;
var plinkos = [];
var divisions = [];
var divPos = [];
var scoreArr = [];

var divisionHeight=300;
var score =0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
     divPos.push([k, k + 80 ]);
   }

   console.log(divPos);

   for(var i = 1; i <= 10; i++){
     var myScore = Math.floor(random(1,10)) * 50;
     scoreArr.push(myScore);
   }
   console.log(scoreArr);
   

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


  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  if(turn <= 5){
    if(particles != null){
      particles.display();
 
     if(particles.body.position.y > 750){
       //console.log(particles.body.position.x)
       for(i = 0; i < divPos.length; i++){
         console.log("i " + i)
         match = 0;
         
         if(particles.body.position.x > divPos[i][0] && particles.body.position.x <= divPos[i][1]){
           console.log("ScoreArr: "+ scoreArr[i])
           var match = 1;
           if(match === 1){
             score += scoreArr[i];
             particles = null;
             match = 2;
             
            
           }
           if(match === 2)
           {
             break;
           }
         }
       }
       
     }
   }

  }
  
 

   // if( turn < 5){

      

     /* if(particles.body.position.y > 750){
        
        if(particles.body.position.x > 0 && particles.body.position.x <= 300){
          score += 500;
          particles = null;
        }
 
        else if(particles.body.position.x > 300 && particles.body.position.x <= 600){
          score += 100;
          particles = null;
        }
 
        else if(particles.body.position.x > 600 && particles.body.position.x < width){
          score += 200;
          particles = null;
        }
      }*/
    //}

  /*  else {
      
      gameState = "end";
      textSize(50);
      text("Game Over", width/2 - 20, height/2);
    }*/

  //}
     
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
}

function mousePressed(){
  if(gameState === 'play'){
    turn++;
    particles = new Particle(mouseX,10, 10,10);
    
    
  }
}

  
