
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
    vX:3,
    vY:-2,
    color: 'black',
    draw: function(){
        ctx.fillStyle=this.color;
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
    color: 'black',
    draw: function(){
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.height,this.WIDTH);
    },
    move: function(e){
        var prevX, prevY;
        prevX=this.x;
        prevY=this.y;
        var t = e.pageX;
        stick.x = t - stick.height / 2;
    }
}

var bonus = {
    height:40,
    width:40,
    x:Math.random()*500,
    y:Math.random()*350,
    color:'red'
};
bonus.__proto__=ball;

function play() {
    ball.draw();

    ball.update();
    example.onmousemove = stick.move;
    stick.draw();
    ctx.clearRect(0,example.height-10,stick.x,10);
    ctx.clearRect(stick.x+stick.height,example.height-10,example.width,10);
    ctx.clearRect(1,1, example.width-2,example.height-11);
    bonus.draw();
    ball.draw();
    checkKick();
    checkBonus();



}
function checkKick (){
   if(ball.y<5){
       ball.vY*=-1;//top wall

   }
    if(ball.x<5){
        ball.vX*=-1;//left wall
    }
    if(ball.x+ball.width>example.width){
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
function checkBonus(){
    if(ball.y>bonus.y&&ball.x>bonus.x&&ball.y+ball.height<(bonus.y+bonus.height)&&ball.x+ball.width<(bonus.x+bonus.width)){
       bonus.x=Math.random()*400;
       bonus.y=Math.random()*350;
       var event = Math.random()*3;
        event= Math.floor(event);
        switch (event){
            case 0:
                ball.height=40;
                ball.width=40;
                break;
            case 1:
                ball.height/=4;
                ball.width/=4;
                break;
            case 2:
                ball.vX+=5;
                ball.vY+=5;
                break;
        }
    }

}
var int = window.setInterval('play()', 10);
