$(function(){
   var canvas = document.getElementById('myCanvas');
   var ctx = canvas.getContext('2d');

   // resize the canvas to fill browser window dynamically
   window.addEventListener('resize', resizeCanvas, false);

   function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - 80;
      drawStuff(); 
   }
   resizeCanvas();
   function drawStuff() {
      var x = canvas.width / 2 - 20;
      var y = canvas.height / 2 - 10;
      // title
      ctx.font = '3em Helvetica';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'black';
      ctx.fillText('Marimba', x, y);
      // subtitle
      ctx.font = '1.5em Helvetica';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'silver';
      ctx.fillText('Sound', x, y + 30);
      ctx.stroke();
      // color boxes
      ctx.beginPath();
      ctx.fillStyle= 'purple';
      ctx.fillRect(x-31,y+40,10,10);
      ctx.fillStyle= 'lawngreen';
      ctx.fillRect(x-18,y+40,10,10);
      ctx.fillStyle= 'gold';
      ctx.fillRect(x-5,y+40,10,10);
      ctx.fillStyle= 'deepskyblue';
      ctx.fillRect(x+8,y+40,10,10);
      ctx.fillStyle= 'deeppink';
      ctx.fillRect(x+20,y+40,10,10);
      ctx.stroke();
      // version
      ctx.font = '1em Helvetica';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'silver';
      ctx.fillText('v 0.9.2', x, y + 70);
      ctx.stroke();
      // message
      ctx.font = '1.25em Helvetica';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'silver';
      ctx.fillText('Tap To Start', x, y + 170);
      ctx.stroke();
   }
   canvas.addEventListener('click', function(){ 
      $.mobile.changePage('library.html');
   });
});
