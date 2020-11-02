
var fixedRect, movingRect;
function setup() {
   createCanvas(800,400);
    fixedRect=createSprite(200, 200, 50, 80); 
    fixedRect.shapeColor="yellow"; 
    fixedRect.debug=true; 

    movingRect=createSprite(500, 200, 70, 40); 
    movingRect.shapeColor="yellow";
   movingRect.debug=true;
   }


   function draw() {
      movingRect.y=mouseY;
       movingRect.x=mouseX;
        console.log(movingRect.x-fixedRect.x); 
    if((movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2)
    &&(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2)
    &&(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2)
    &&(fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)){ 
      movingRect.shapeColor="red";
       fixedRect.shapeColor="red";
       }

       else{ 
         movingRect.shapeColor="yellow";
        fixedRect.shapeColor="yellow"; 
      }
         background(0);
          drawSprites();
         }





