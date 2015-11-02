
var example = document.getElementById("canvas"),
    ctx= example.getContext('2d');
//ctx.strokeRect(0, 0, example.width, example.height);
var x=0,y=0;
ctx.strokeRect(0,0, example.width, example.height);
var ball={
    x:400,
    y:300,
    height:10,
    width:10,
    vX:2,
    vY:-2,
    draw: function(){
        ctx.fillStyle='black';
        ctx.fillRect(this.x,this.y,this.height,this.width);
    },

    update: function(){
        this.x+=this.vX;
        this.y+=this.vY;
    }
};
var stick ={

    x:240,
    y:390,
    height:100,
    WIDTH:10,

    draw: function(){
        ctx.fillStyle='black';
        ctx.fillRect(this.x,this.y,this.height,this.WIDTH);
    },
    move: function(e){
        var prevX, prevY;
        prevX=this.x;
        prevY=this.y;
        var t = e.pageX;
        stick.x = t - stick.height / 2;


        //  alert(e.pageX);
    },
    constructour:function(x,y,h){
        this.x=x;
        this.y=y;
        this.height=h;

    }
}


function play() {
    ball.draw();
    ball.update();
    example.onmousemove = stick.move;
    stick.draw();
    ctx.clearRect(0,example.height-10,stick.x,10);
    ctx.clearRect(stick.x+stick.height,example.height-10,example.width,10);
    ctx.clearRect(4,4, example.width-5,example.height-14);
    ball.draw();
    checkKick();




}
function checkKick (){
   if(ball.y<5){
       ball.vY*=-1;//top wall
   }
    if(ball.x<5){
        ball.vX*=-1;//left wall
    }
    if(ball.x>example.width-5){
        ball.vX*=-1; //right wall
    }
//    if((ball.y+ball.height)>(example.height-10)&&ball.x<=stick.x&&ball.x>=(stick.x+stick.height)){
//ball.vX*=-1;
//    }
    if((ball.y+ball.height)>(example.height-10)&&ball.x>=stick.x&&ball.x<=stick.x+stick.height){
        ball.vY*=-1;
    }
  if(ball.y>example.height){
      clearInterval(int)
      alert('Sorry, you lose');
  }

}

var int = window.setInterval('play()', 10);
