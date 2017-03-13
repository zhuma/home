/**
 * Created by hanshaojie-pc on 2017/3/12.
 */
function b(){
    c=document.getElementById('ctx');
    ctx=c.getContext('2d');
    a();
    setInterval(a,1000);
}

var img=new Image();
img.src='img/shizijia.jpg';
var c=null;
var ctx=null;
function a(){
    var grd=ctx.createRadialGradient(0,0,0,0,0,200);
    var now=new Date();

    ctx.clearRect(0,0,c.width,c.height);
    // background-image
    /*    ctx.save();
   ctx.beginPath();
    ctx.arc(500,300,400,0,2*Math.PI,false);
    ctx.closePath();
    ctx.clip();
   ctx.drawImage(img,0,0,750,630,200,10,600,600);
    ctx.restore();*/
    ctx.save();
    ctx.translate(500,300);
    //ctx.scale(1.5,1.5);
    ctx.rotate(-Math.PI/2);
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    ctx.lineWidth = 8;
    ctx.lineCap = "round";

    //渐变背景
    /*ctx.save();
    ctx.beginPath();
    ctx.arc(0,0,200,0,2*Math.PI,false);
    ctx.closePath();
    grd.addColorStop(1,"rgba(0,0,0,1)");
    grd.addColorStop(0,"rgba(255,255,255,0.3)");
    ctx.fillStyle=grd;
    ctx.fill();
    ctx.restore();*/
    //小时格格
    ctx.save();
    for (var i=0;i<12;i++){
        ctx.beginPath();
        ctx.rotate(Math.PI/6);
        ctx.moveTo(100,0);
        ctx.lineTo(120,0);
        ctx.stroke();
    }
    ctx.restore();
    //分钟格格
    ctx.save();
    ctx.lineWidth = 5;
    for (i=0;i<60;i++){
        if (i%5!=0) {
            ctx.beginPath();
            ctx.moveTo(117,0);
            ctx.lineTo(120,0);
            ctx.stroke();
        }
        ctx.rotate(Math.PI/30);
    }
    ctx.restore();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr  = now.getHours();
    hr = hr>=12 ? hr-12 : hr;
    //时针
    ctx.save();
    ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec );
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20,0);
    ctx.lineTo(80,0);
    ctx.stroke();
    ctx.restore();
    //分针
    ctx.save();
    ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec );
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28,0);
    ctx.lineTo(112,0);
    ctx.stroke();
    ctx.restore();
    //秒针1
    /*ctx.save();
     ctx.rotate(sec*Math.PI/30);
     ctx.strokeStyle='red';
     ctx.shadowColor='red';
     ctx.shadowBlur=5;
     ctx.shadowOffsetX=0;
     ctx.shadowOffsetY=0;
     ctx.lineWidth=6;
     ctx.beginPath();
     ctx.moveTo(0,0);
     ctx.bezierCurveTo(30,-30,80,50,100,0);
     ctx.stroke();
     ctx.closePath();
     ctx.beginPath();
     ctx.arc(80,0,8,0,2*Math.PI,false)
     ctx.fillStyle='red';
     ctx.fill();
     ctx.restore();  */
    //秒针2
    ctx.save();
    ctx.rotate(sec*Math.PI/30);
    ctx.strokeStyle='red';
    ctx.shadowColor='red';
    ctx.shadowBlur=5;
    ctx.shadowOffsetX=0;
    ctx.shadowOffsetY=0;
    ctx.lineWidth=6;
    ctx.beginPath();
    ctx.moveTo(-20,0);
    ctx.lineTo(100,0);
    ctx.stroke();
    ctx.closePath();
    ctx.moveTo(20,30);
    ctx.lineTo(20,-30);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(0,0,3,0,2*Math.PI,false);
    ctx.fillStyle='black';
    ctx.fill();
    ctx.restore();
    //白圈
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth=20;
    ctx.arc(0,0,200,0,2*Math.PI,false);
    ctx.closePath();
    ctx.strokeStyle='rgba(141,141,141)';
    ctx.stroke();
    ctx.restore();
    ctx.restore();
}
window.onload=function(){
    b();
};

