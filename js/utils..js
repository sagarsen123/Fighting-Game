
function rectangularCollision({ rectangle1, rectangle2 }) {
   return (rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x)
      && (rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.attackBox.width)
      && (rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y)
      && (rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.attackBox.height);
}



function determineWinner({player,enemy,timerid}){
   clearTimeout(timerid);
   if(player.health==enemy.health){
      document.querySelector("#result").innerHTML = "MATCH DRAW";
   }else if(player.health>enemy.health){
      // enemy.dead=true;
      enemy.switchSprites("death");
      document.querySelector("#result").innerHTML = "Player1  Won";
   }else if(player.health<enemy.health){
      // player.dead=true; 
      player.switchSprites("death");
   document.querySelector("#result").innerHTML = "Player2 Won";
}}

let timer = 60;
let timerid ;
function decreaseTimer() {
   timerid = setTimeout(decreaseTimer, 1000);
   if (timer > 0) {
      timer--;
      // console.log(timer)
      document.querySelector("#timer").innerHTML = timer;
   }
   if(timer==0 || player.health==0 || enemy.health==0){
      determineWinner({player,enemy,timerid})
   }
}