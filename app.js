

var timer=document.querySelector('#time');
var hit=document.querySelector('#hit')
var board=document.querySelector('#board');
var score=document.querySelector('#yourScore');
var time=60;
var clickedNo;
setInterval(function()
    {
        if(time>0)
        {
       timer.textContent=--time;
        }
        else{
            board.innerHTML='';
            board.innerHTML=`<div id="over"> Game Over </div>`;
        }
    },1000)
var num;
    function getHitNumber()
    {
     num=Math.floor(Math.random()*10);
     hit.textContent=num;
    }
   function makeBubble()
   {
       board.innerHTML='';
       for(var i=0; i<126; i++)
       {
           var number=Math.floor(Math.random()*10);
           board.innerHTML=board.innerHTML +` <div id="bubble" class="bubbles">
           <h3>${Math.floor(Math.random()*10)}</h3>
           </div>`;
       }
   }

    getHitNumber();
    makeBubble();

    board.addEventListener('click',function(details)
    {
      clickedNo=details.target.textContent;
      if(clickedNo==num)
      
      {
         score.textContent=Number(score.textContent)+10;
         makeBubble();
         getHitNumber();
      }
    })
